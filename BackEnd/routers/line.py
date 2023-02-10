from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
import db
import line_notification


router = APIRouter(
    prefix="/line",
    tags=["line"]
)


@router.post("/webhook")
def get_info(event: Body()):
    print(event)
    