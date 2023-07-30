from peewee import *

db = SqliteDatabase("db.sqlite3")


class Base(Model):
    class Meta:
        database = db


class Speciality(Base):
    name = CharField()
    transliterated = CharField()
    


class Requirement(Base):
    name = CharField()
    description = CharField(null=True)


class ReqToSpec(Base):
    speciality = ForeignKeyField(Speciality)
    requirement = ForeignKeyField(Requirement)


class PetProject(Base):
    name = CharField()
    description = CharField()
    speciality = ForeignKeyField(Speciality)


db.connect()
db.create_tables([Speciality, Requirement, ReqToSpec, PetProject])


def get_db():
    try:
        db.connect()
        yield db
    finally:
        if not db.is_closed():
            db.close()
