from fastapi import APIRouter
from db import bin_status, contact

router = APIRouter(
    prefix="/all_bins",
    tags=["all_bins"]
)

@router.get("/")
def show_all_bins():
    result = list()
    for bin in contact.find({}):
        bin_id = bin["bin_id"]
        bin_s = bin_status.find_one({"bin_id": bin_id})
        result.append({
            "bin_id": bin_id,
            "status": bin_s["status"],
            "location": bin["location"],
            "zone": bin["zone"]
        })
    return {"message": result}

@router.get("/status")
def show_all_bin_status():
    result = list()
    for bin in contact.find({}):
        bin_id = bin["bin_id"]
        bin_s = bin_status.find_one({"bin_id": bin_id})
        result.append({
            "bin_id": bin_id,
            "status": bin_s["status"],
        })
    return {"message": result}

@router.get("/{bin_id}/status")
def show_bin_status(bin_id: int):
    bin_s = bin_status.find_one({"bin_id": bin_id})
    bin_c = contact.find_one({"bin_id": bin_id})
    return {
        "bin_id": bin_id,
        "status": bin_s["status"],
        "in_charge": bin_c["in_charge"],
        "contact": bin_c["contact"],
        "location": bin_c["location"],
        "zone": bin_c["zone"],
        "image": bin_c["image"]
    }