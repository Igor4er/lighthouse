import os
import json
from peewee import SqliteDatabase
from database import PetProject


with open(os.path.realpath(__file__).replace("insert_pet.py", "pet.json"), encoding="utf-8") as file:
    pets_data = json.load(file)
    for data in pets_data.keys():
        for pet in pets_data[data]:
            print(pet)
            row, created = PetProject.get_or_create(
                name=pet["name"],
                description=pet["description"],
                speciality_id=int(data),
            )
