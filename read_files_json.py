
import sys
import os
import json

files = sys.argv[1:]
result = []

for file_path in files:
    if os.path.exists(file_path):
        try:
            with open(file_path, "r") as f:
                content = f.read()
                result.append({"path": file_path, "content": content})
        except Exception as e:
            # Skip binary or unreadable files
            pass

print(json.dumps(result, indent=2))
