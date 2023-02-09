from fastapi import APIRouter, HTTPException
import db

router = APIRouter(
    prefix="/zone",
    tags=["zone"]
)

zone_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]

@router.get("/reset_data")
def get_reset_data():
    zone_reset =  {"A": 0, "B": 0 , "C": 0, "D": 0,
                    "E": 0, "F": 0, "G": 0, "H": 0,
                    "I": 0, "J": 0, "K": 0, "L": 0, "M": 0}
    for data in db.contact.find():
        for index in range(zone_list.__len__()):
            if data["zone"] ==  zone_list[index]:
                for status in db.bin_status.find({"bin_id": data["bin_id"]}): 
                    zone_reset[data["zone"]] += status["reset"]
                    break
                break
    return {"message": [zone_reset,{"mean": sum(zone_reset.values())/len(zone_reset)}]}
            

@router.get("/{zone_name}")
def get_zone(zone_name: str):
    if zone_name  in  zone_list:
        res = db.contact.find({"zone": zone_name})
        result = list()
        for bin in db.contact.find({"zone": zone_name}):
            result.append({
            "bin_id": bin["bin_id"],
            "location": bin["location"],
            "zone": bin["zone"]
        })
        return {"message": result}
    else:
        raise HTTPException(status_code=404, detail="Zone not found")

                

    
    

