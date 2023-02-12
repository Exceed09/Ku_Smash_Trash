from fastapi import APIRouter, HTTPException
import db
import line_notification

router = APIRouter(
    prefix="/zone",
    tags=["zone"]
)

zone_list = ["A", "B", "C", "D1", "D2", "E", "F", "G", "H", "J", "K1", "K2", "L", "M"]


def get_zone_reset(zone_name: str):
    zone_reset = 0
    bins = 0
    for data in db.contact.find({"zone": zone_name}):
        zone_reset += db.bin_status.find_one({"bin_id": data["bin_id"]})["reset"]
        bins += 1
    return round(zone_reset/bins, 3)


@router.get("/reset_data")
def get_reset_data():
    zone_reset = {"A": 0, "B": 0, "C": 0, "D1": 0, "D2": 0, "E": 0, "F": 0,
                  "G": 0, "H": 0, "J": 0, "K1": 0, "K2": 0, "L": 0, "M": 0}
    for zone in zone_list:
        zone_reset[zone] = get_zone_reset(zone)
    return {"message": [zone_reset, {"mean": sum(zone_reset.values())/len(zone_reset)}]}
            

@router.get("/{zone_name}")
def get_zone(zone_name: str):
    if zone_name in zone_list:
        res = db.contact.find({"zone": zone_name})
        result = list()
        for bin in db.contact.find({"zone": zone_name}):
            result.append({
                "bin_id": bin["bin_id"],
                "location": bin["location"],
                "zone": bin["zone"],
                "image": bin["image"]
            })
        return {"message": result}
    else:
        raise HTTPException(status_code=404, detail="Zone not found")
