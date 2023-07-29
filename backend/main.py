from fastapi import FastAPI, Depends
from peewee import SqliteDatabase
from transliterate import translit
from database import get_db, Speciality


app = FastAPI()


@app.get(path="/get/")
def get_db(db: SqliteDatabase = Depends(get_db)):
    try:
        user = Speciality.select()
        return user
    except Speciality.DoesNotExist:
        return "Sir, seems like we don't have no data. Would You like ask my developer to fetch some for you. Thank You, have a great time"
    return {"Hello": mess, "string": string}



@app.get(path="/spec/")
def insert_spec(name:str):
    ua_name = translit(name, 'uk')
    return {"Eng": name, "Ua": ua_name}