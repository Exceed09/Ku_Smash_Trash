from fastapi import FastAPI
from routers import all_bins, bin, zone
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(all_bins.router)
app.include_router(bin.router)
app.include_router(zone.router)

@app.get("/")
def root():
    return {"msg": "welcome to root page"}
