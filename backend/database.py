from peewee import *

db = SqliteDatabase('db.sqlite3')


class Base(Model):
    class Meta:
        database = db


class Speciality(Base):
    name = CharField()
    transliterated = CharField()


class Requirement(Base):
    name = CharField()


class ReqToSpec(Base):
    speciality = ForeignKeyField(Speciality)
    requirement = ForeignKeyField(Requirement)

db.connect()
db.create_tables([Speciality, Requirement, ReqToSpec])


def get_db():
    try:
        db.connect()
        yield db
    finally:
        if not db.is_closed():
            db.close()

try:
        # specs = Speciality.select()
        print([author for author in Speciality.select()])

except Speciality.DoesNotExist:

        print( "Sir, seems like we don't have no data. Would You like ask my developer to fetch some for you. Thank You, have a great time")