from linebot import LineBotApi
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
from dotenv import load_dotenv
import os

load_dotenv(".env")
line_bot_api = LineBotApi(os.getenv("LINE_CHANNEL_ACCESS_TOKEN"))

def send_full_alert(bin_id: int, zone: str, location: str, status: int):
    if status >= 100:
        try:
            line_bot_api.broadcast(TextSendMessage(text=f"Please change garbage bag at Bin {bin_id} in zone {zone} at {location} is {status}% Full."))
        except LineBotApiError as e:
            raise e
    else:
        pass

def sent_red_alert(bin_id: int, zone: str, location: str, status: int):
    if status >= 80 and status < 100:
        try:
            line_bot_api.broadcast(TextSendMessage(text=f"Please Check Bin {bin_id} in zone {zone} at {location} is {status}% Almostfull."))
        except LineBotApiError as e:
            raise e
    else:
        pass

def sent_yellow_alert(bin_id: int, zone: str, location: str, status: int):
    if status >= 50 and status < 80:
        try:
            line_bot_api.broadcast(TextSendMessage(text=f"Please Standby Bin {bin_id} in zone {zone} at {location} is {status}% Half full."))
        except LineBotApiError as e:
            raise e
    else:
        pass

def sent_message(bin_id: int, zone: str, location: str, status: int):
    send_full_alert(bin_id, zone, location, status)
    sent_red_alert(bin_id, zone, location, status)
    sent_yellow_alert(bin_id, zone, location, status)