import os
from tqdm import tqdm
from transliterate import translit
from database import Speciality, Requirement, ReqToSpec, db


def split_data():
    with open(
        os.path.realpath(__file__).replace("split.py", "data.txt"),
        "r",
        encoding="UTF-8",
    ) as file:
        content = file.read()
        lines = content.split(";")
        list_of_requirements = []
        for i in tqdm(range(0, len(lines) - 1)):
            # db.connect()
            dictionary = {}
            separate_words = []
            requirements = []
            line = lines[i]
            separate_words = line.split(",")
            name = separate_words[0].replace("\n", "")
            ua_name = translit(name, "uk")
            spec_id = Speciality.get_or_create(name=name, transliterated=ua_name)
            for n in range(0, len(separate_words)):
                if n >= 1:
                    req_id = Requirement.get_or_create(name=separate_words[n])
                    req_to_spec = ReqToSpec.get_or_create(
                        speciality_id=spec_id[0], requirement_id=req_id[0]
                    )
                    requirements.append(separate_words[n])
            dictionary.update({name: requirements})
            list_of_requirements.append(dictionary)
        return list_of_requirements


split_data()
