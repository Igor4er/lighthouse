from fastapi import FastAPI, Depends
import json
from peewee import SqliteDatabase
from playhouse.shortcuts import model_to_dict
from database import get_db, Speciality
import uvicorn

app = FastAPI()


@app.get(path="/get/")
def get_data():
    try:
        data = Speciality.select()
        data_list = []
        for d in data:
            data_list.append({"id": d.id, "name": d.name, "transliterated": d.transliterated})
        return data_list

    except Speciality.DoesNotExist:
        return "Sir, seems like we don't have no data. Would You like ask my developer to fetch some for you. Thank You, have a great time"

    return {"Hello": "world!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


@app.get(path="/spec/")
def insert_spec(name:str):
    return {"Eng": name}