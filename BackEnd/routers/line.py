from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from db import bin_status, contact, line
from dotenv import load_dotenv
from cryptography.fernet import Fernet
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
import linebot
import os

load_dotenv(".env")
respond = linebot.LineBotApi(os.getenv("LINE_CHANNEL_ACCESS_TOKEN"))

router = APIRouter(
    prefix="/line",
    tags=["line"]
)


class Event(BaseModel):
    destination: str
    events: list


@router.post("/webhook")
def get_info(event: Event = Body()):
    if event.events[0]["type"] == "message":
        if not contact.find_one({"in_charge": event.events[0]["message"]["text"]}):
            try:
                respond.push_message(event.events[0]["source"]["userId"],
                                     TextSendMessage(
                                         text="Your name not found in the database, please try another name."))
            except LineBotApiError as e:
                raise e
            raise HTTPException(400, detail="Message send failed")
        fernet = Fernet(os.getenv("fernet_key").encode())
        key = fernet.encrypt(event.events[0]["source"]["userId"].encode())
        line.insert_one({"in_charge": event.events[0]["message"]["text"],
                         "secret_key": key.decode()})
