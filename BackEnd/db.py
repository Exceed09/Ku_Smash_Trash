from pymongo import MongoClient
from dotenv import load_dotenv
from os import getenv

DATABASE_NAME = "exceed09"
BIN_STATUS_COLLECTION = "Bin_Status"
CONTACT_COLLECITON = "Contact"
LINE_COLLECTION = "Line"
MONGO_DB_DOM = "mongo.exceed19.online"
MONGO_DB_PORT = 8443

load_dotenv(".env")
username = getenv("name")
password = getenv("password")

client = MongoClient(f"mongodb://{username}:{password}@{MONGO_DB_DOM}:{MONGO_DB_PORT}/?authMechanism=DEFAULT")

db = client[DATABASE_NAME]
bin_status = db[BIN_STATUS_COLLECTION]
contact = db[CONTACT_COLLECITON]
line = db[LINE_COLLECTION]
