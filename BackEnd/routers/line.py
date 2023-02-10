from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
import db
import line_notification


router = APIRouter(
    prefix="/line",
    tags=["line"]
)


class Event(BaseModel):
    destination: str
    events: list


@router.post("/webhook")
def get_info(event: Event = Body()):
    print(event)
    