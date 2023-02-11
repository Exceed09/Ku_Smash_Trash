#include <Arduino.h>
#include <HTTPClient.h>

void Connect_Wifi() {
  // const char *ssid = ".. (2)";
  // const char *password = "12345671";
  const char *ssid = "choon";
  const char *password = "12345678";
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.print("OK! IP=");
  Serial.println(WiFi.localIP());
  Serial.println("--------------------------------------------------------------------");
}