import json
import meilisearch
import os
from dotenv import load_dotenv
load_dotenv()

client = meilisearch.Client('http://localhost:7700', os.getenv("LH_MEILI_MK"))

client.index('specs').update_filterable_attributes([
  'name',
  'transliterated'
])

print(f"F: {client.index('specs').get_filterable_attributes()}")
