from fastapi import FastAPI, Depends
import json
from peewee import SqliteDatabase
from playhouse.shortcuts import model_to_dict
from database import get_db, Speciality, ReqToSpec, Requirement, PetProject
import uvicorn

app = FastAPI()


@app.get(path="/get/")
def get_data():
    try:
        data = Speciality.select()
        data_list = []
        for d in data:
            data_list.append(
                {"id": d.id, "name": d.name, "transliterated": d.transliterated}
            )
        return data_list

    except Speciality.DoesNotExist:
        return "Sir, seems like we don't have no data. Would You like ask my developer to fetch some for you. Thank You, have a great time"

    return {"Hello": "world!"}


@app.get(path="/spec/")
def get_spec(id: int):
    try:
        print(id)
        data = Speciality.get_by_id(id)
        projects = PetProject.select().where(PetProject.speciality == id)
        reqs_to_spec = ReqToSpec.select().where(ReqToSpec.speciality == id)
        reqs = [Requirement.get(id=req.requirement_id).name for req in reqs_to_spec]
        return {
            "id": data.id,
            "name": data.name,
            "transliterated": data.transliterated,
            "projects": [{"name": p.name, "desc": p.description} for p in projects],
            "reqs": reqs,
        }

    except Speciality.DoesNotExist:
        return "Sir, seems like we don't have no data. Would You like ask my developer to fetch some for you. Thank You, have a great time"


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
