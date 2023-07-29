import json
from database import PetProject


with open("backend/pet.json", encoding="utf-8") as file:
    pets_data = json.load(file)
    for data in pets_data.keys():
        for pet in pets_data[data]:
            row, created = PetProject.get_or_create(
                name=pet["name"],
                description=pet["description"],
                speciality_id=int(data),
            )
