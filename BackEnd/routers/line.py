from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from db import bin_status, contact, line
from dotenv import load_dotenv
from cryptography.fernet import Fernet
import os

load_dotenv(".env")


router = APIRouter(
    prefix="/line",
    tags=["line"]
)


class Event(BaseModel):
    destination: str
    events: list


@router.post("/webhook")
def get_info(event: Event = Body()):
    if event.events[0]["type"] == "message" and contact.find_one({"in_charge": event.events[0]["message"]["text"]}):
        fernet = Fernet(os.getenv("fernet_key").encode())
        key = fernet.encrypt(event.events[0]["source"]["userId"].encode())
        line.insert_one({"in_charge": event.events[0]["message"]["text"],
                         "secret_key": key.decode()})