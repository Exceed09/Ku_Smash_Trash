from linebot import LineBotApi
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
from dotenv import load_dotenv
from cryptography.fernet import Fernet
from fastapi import HTTPException
import db
import os

load_dotenv(".env")
line_bot_api = LineBotApi(os.getenv("LINE_CHANNEL_ACCESS_TOKEN"))

    
def message(user_id: str, bin_id: int, zone: str, location: str, status: int, prefix: str, suffix: str):
    try:
        line_bot_api.push_message(user_id,
                                  TextSendMessage(text=f"{prefix}Bin {bin_id} in zone {zone} at {location} is {status:.2f}% {suffix}"))
    except LineBotApiError as e:
        raise e


def sent_message(name: str, bin_id: int, zone: str, location: str, status: int):
    data = db.line.find_one({"in_charge": name})
    if data is None:
        raise HTTPException(400, detail="No line contact with this name in database.")
    user_id = Fernet(os.getenv("fernet_key").encode()).decrypt(data["secret_key"].encode()).decode()
    if status >= 100:
        message(user_id, bin_id, zone, location, status, "Please Check ", "is full.")
    elif status >= 85:
        message(user_id, bin_id, zone, location, status, "Please Check ", "Almost full.")
    else:
        pass