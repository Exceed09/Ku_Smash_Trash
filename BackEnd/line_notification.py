from linebot import LineBotApi
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
from dotenv import load_dotenv
from os import getenv

load_dotenv(".env")
line_API_key = getenv("line_API_key")

line_bot_api = LineBotApi(line_API_key)

def send_full_status(bin_id: int, zone: str, location: str, status: int):
    try:
        line_bot_api.broadcast(TextSendMessage(text=f"Please change garbage bag at Bin {bin_id} in zone {zone} at {location} is {status}% full."))
    except LineBotApiError as e:
        raise e