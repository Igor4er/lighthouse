import meilisearch
import json
import os
from dotenv import load_dotenv
load_dotenv()


if __name__ == "__main__":
    client = meilisearch.Client('http://localhost:7700', os.getenv("LH_MEILI_MK"))

    res = client.get_keys()
    for r in res.results:
        print(f"{r.name}: ({r.key})")
