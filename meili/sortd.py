import json
import meilisearch
import os
from dotenv import load_dotenv
load_dotenv()

client = meilisearch.Client('http://localhost:7700', os.getenv("LH_MEILI_MK"))

client.index('specs').update_settings({
  'filterableAttributes': [
      'name',
      'transliterated'
  ],
  'sortableAttributes': [
      'name',
      'transliterated'
  ]
})
