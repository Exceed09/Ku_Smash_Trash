#include <Arduino.h>
#include <Bounce2.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <ESP32Servo.h>
#include "Ultrasonic.h"
#include "Connect_Wifi.h"

// -------------- ID ---------------
const int trash_can_id = 1;

// -------------- backend url ------------------
String base_url = "https://ecourse.cpe.ku.ac.th/exceed09/bin/";

// -------------- Pin definitions ----------------------
/* rgb light*/
#define rgb_led_r 25
#define rgb_led_g 26
#define rgb_led_b 27
/* laser */
#define laser_1 19
#define laser_2 18
/* ldr */
#define ldr_1 34
#define ldr_2 32
/* button */
#define button 14
/* micro servo */
#define servo_pin_1 4
/* ultrasonic sensor */
#define ultrasonic_pin 33

// -------- Function prototypes ----------
void Connect_Wifi();
void GET_trash_count(int count);
void LIGHT_status(int percentage);
void COUNTING_trash(void *param);                  // Task A
void OPEN_CLOSE_trash_can(void *param);            // Task B
void RESET(void *param);                           // Task C


// ------------- Task handles ---------------
TaskHandle_t TaskA = NULL;
TaskHandle_t TaskB = NULL;
TaskHandle_t TaskC = NULL;

// -------------- Global variables ---------------
int max_count = 0;
int count1 = 0, count2 = 0;
double percentage = 0;
bool open_trash_can = 0;
Bounce debouncer = Bounce();
Servo servo_1;
int ultrasonic_temp = 0;
int ultrasonic_n = 0;
int ultrasonic_reverse_n = 0;
Ultrasonic ultrasonic(ultrasonic_pin);

void setup() {
  Serial.begin(115200);
  //wifi
  Connect_Wifi();
  //rgb light
  pinMode(rgb_led_r, OUTPUT);
  pinMode(rgb_led_g, OUTPUT);
  pinMode(rgb_led_b, OUTPUT);
  digitalWrite(rgb_led_g, HIGH);
  //laser
  pinMode(laser_1, OUTPUT);
  pinMode(laser_2, OUTPUT);
  digitalWrite(laser_1, HIGH);
  digitalWrite(laser_2, HIGH);
  //ldr
  pinMode(ldr_1, INPUT);
  pinMode(ldr_2, INPUT);
  //button
  debouncer.attach(button, INPUT_PULLUP);
  debouncer.interval(25);
  //servo
  servo_1.attach(servo_pin_1);
  servo_1.write(90);
  // task create
  xTaskCreatePinnedToCore(COUNTING_trash, "COUNTING_trash", 1024*10, NULL, 2, &TaskA, 0);
  xTaskCreatePinnedToCore(OPEN_CLOSE_trash_can, "OPEN_CLOSE_trash_can", 1024*10, NULL, 3, &TaskB, 1);
  xTaskCreatePinnedToCore(RESET, "RESET", 1024*10, NULL, 1, &TaskC, 0);
}

void loop() {
}

void GET_trash_count(int count) {
  DynamicJsonDocument doc(2048);
  HTTPClient http;
  String url = base_url + trash_can_id + "/add/1";
  Serial.println(url);
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  int httpCode = http.GET();
  Serial.print("GET httpCode: ");
  Serial.println(httpCode);
  if (httpCode == 200) {
    String payload = http.getString();
    deserializeJson(doc, payload);
    percentage = doc["percentage"].as<double>();
    Serial.print("percentage : ");
    Serial.println(percentage);
  }
}

void LIGHT_status(int percentage) {
  if (percentage < 50) {
    digitalWrite(rgb_led_r, LOW);
    digitalWrite(rgb_led_g, HIGH);
    digitalWrite(rgb_led_b, LOW);
  } else if (percentage < 80) {
    digitalWrite(rgb_led_r, HIGH);
    digitalWrite(rgb_led_g, HIGH);
    digitalWrite(rgb_led_b, LOW);
  } else if (percentage < 100) {
    digitalWrite(rgb_led_r, HIGH);
    digitalWrite(rgb_led_g, LOW);
    digitalWrite(rgb_led_b, LOW);
  } else {
    for (int i=0; i<2; i++) {
      if (!i) {
        digitalWrite(rgb_led_r, HIGH);
        digitalWrite(rgb_led_g, LOW);
        digitalWrite(rgb_led_b, LOW);
      } else {
        digitalWrite(rgb_led_r, LOW);
        digitalWrite(rgb_led_g, LOW);
        digitalWrite(rgb_led_b, LOW);
      }
      vTaskDelay(500 / portTICK_PERIOD_MS);
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

void COUNTING_trash(void *param) {
  while (1) {
    LIGHT_status(percentage);
    if (open_trash_can) {
      Serial.println("counting trash");
      Serial.print("ldr_1: ");
      Serial.println(analogRead(ldr_1));
      Serial.print("ldr_2: ");
      Serial.println(analogRead(ldr_2));
      int readLDR1 = analogRead(ldr_1);
      int readLDR2 = analogRead(ldr_2);
      if ((readLDR1 < 2500 && readLDR1 != 0) || (readLDR2 < 2500 && readLDR2 != 0)) {
        GET_trash_count(max_count);
        max_count = max(count1, count2);  
        count1 = max_count;
        count2 = max_count;
        vTaskDelay(1000 / portTICK_PERIOD_MS);
      }
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

void OPEN_CLOSE_trash_can(void *param) {
  while (1) {
    int tmp = ultrasonic.MeasureInCentimeters();
    if (tmp <= 15) {
      ultrasonic_n++;
      ultrasonic_reverse_n=0;
    } else {
      // ultrasonic_temp = ultrasonic.MeasureInCentimeters();
      ultrasonic_n = 0;
      ultrasonic_reverse_n++;
    }

    Serial.print("ultrasonic : ");
    Serial.println(ultrasonic_n);
  
    Serial.print("ultrasonic reverse : ");
    Serial.println(ultrasonic_reverse_n);
    if (ultrasonic_n >= 5) {

        open_trash_can = 1;
        Serial.println("trash can  --open--");
        servo_1.write(180);
        vTaskDelay(10000 / portTICK_PERIOD_MS);
    }
    else if(ultrasonic_reverse_n >= 5) {
        Serial.println("trash can --close--");
        servo_1.write(90);
        open_trash_can = 0;
      }
    }
  vTaskDelay(200 / portTICK_PERIOD_MS);
}


void RESET(void *param) {
  while (1) {
    debouncer.update();
    if (debouncer.fell()) {
      Serial.println("--reset--");
      count1 = 0;
      count2 = 0;
      max_count = 0;
      String url = base_url + trash_can_id + "/reset";
      HTTPClient http;
      http.begin(url);
      http.addHeader("Content-Type", "application/json");
      int httpCode = http.GET();
    }
    vTaskDelay(50 / portTICK_PERIOD_MS);
  }
}                       

