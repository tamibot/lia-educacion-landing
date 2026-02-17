
import os
import json

files_to_push = [
    "index.tsx", "App.tsx", "index.html", "app/dashboard/Dashboard.tsx", 
    "metadata.json", "index.css", "README.md", "types.ts",
    "package.json", "tsconfig.json", "vite.config.ts", "run_dev.sh",
    "components/AudienceSplit.tsx", "components/ContentShowcase.tsx",
    "components/Ecosystem.tsx", "components/EducationSolutions.tsx",
    "components/FAQ.tsx", "components/Footer.tsx", "components/Hero.tsx",
    "components/HowItWorks.tsx", "components/Navbar.tsx",
    "components/Onboarding.tsx", "components/PhoneMockup.tsx",
    "components/Pricing.tsx"
]

result = []
for file_path in files_to_push:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            content = f.read()
            result.append({"path": file_path, "content": content})

print(json.dumps(result))
