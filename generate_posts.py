
import os
import json

posts_dir = "posts"
posts = []

for filename in os.listdir(posts_dir):
    if filename.endswith(".html"):
        title = filename.replace(".html", "").replace("-", " ").title()
        posts.append({"title": title, "link": f"{posts_dir}/{filename}"})

with open("posts.json", "w") as json_file:
    json.dump(posts, json_file, indent=4)
