import json
import meilisearch
import os
from dotenv import load_dotenv
load_dotenv()

client = meilisearch.Client('http://localhost:7700', os.getenv("LH_MEILI_MK"))

json_file = open('specs.json', encoding='utf-8')
specs = json.load(json_file)
client.index('specs').add_documents(specs)
