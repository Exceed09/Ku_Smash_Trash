from fastapi import APIRouter
from db import bin_status, contact

router = APIRouter(
    prefix="/all_bins",
    tags=["all_bins"]
)
