from linebot import LineBotApi
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
from dotenv import load_dotenv
import os

load_dotenv(".env")
line_bot_api = LineBotApi(os.getenv("LINE_CHANNEL_ACCESS_TOKEN"))

def send_full_status(bin_id: int, zone: str, location: str, status: int):
    if status >= 100:
        try:
            line_bot_api.broadcast(TextSendMessage(text=f"Please change garbage bag at Bin {bin_id} in zone {zone} at {location} is {status}% full."))
        except LineBotApiError as e:
            raise e
    else:
        pass