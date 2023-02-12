from fastapi import APIRouter
from db import bin_status, contact, line
from line_notification import sent_message
import time

router = APIRouter(
    prefix="/bin",
    tags=["bin"]
)

TRASH_CAN_VOLUME = 24000.0  # cm^3
TRASH_FILL_VOLUME = 600.0  # cm^3


@router.get("/{bin_id}/add/{trash_count}")
def add_amount(bin_id: int, trash_count: int):
    add = (TRASH_FILL_VOLUME * trash_count / TRASH_CAN_VOLUME) * 100
    total_in_bin = round(bin_status.find_one({"bin_id": bin_id})["status"] + add, 4)

    bin_status.update_one({"bin_id": bin_id}, {"$set": {"status": total_in_bin}})
    trash_bin = contact.find_one({"bin_id": bin_id})
    status = bin_status.find_one({"bin_id": bin_id})
    contract = line.find_one({"in_charge": trash_bin["in_charge"]})
    if contract["recent_send_time"] == 0 and total_in_bin >= 80:
        sent_message(trash_bin["in_charge"], trash_bin["bin_id"], trash_bin["zone"],
                    trash_bin["location"], status["status"])
        line.update_one({"in_charge": trash_bin["in_charge"]}, {"$set": {"recent_send_time": time.time()}})
    return {"percentage": total_in_bin}


@router.get("/{bin_id}/reset")
def add_reset(bin_id: int):
    amount = bin_status.find_one({"bin_id": bin_id})["reset"] + 1
    bin_status.update_one({"bin_id": bin_id}, {"$set": {"reset": amount, "status": 0}})
    trash_bin = contact.find_one({"bin_id": bin_id})
    line.update_one({"in_charge": trash_bin["in_charge"]}, {"$set": {"recent_send_time": 0}}) 
    return {"message": 0.0}
