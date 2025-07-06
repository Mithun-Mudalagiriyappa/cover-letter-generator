import requests
import json
from fastapi import FastAPI, HTTPException
from app.models import LetterRequest
from app.prompt_engine import generate_prompt

app = FastAPI()

@app.post("/generate")
def generate_letter(payload: LetterRequest):
    prompt = generate_prompt(payload)
    print("📝 Prompt:", prompt)

    try:
        # Send POST request with stream enabled
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "mistral",
                "prompt": prompt,
                "stream": True  # ← enable streaming mode
            },
            stream=True,
            timeout=300
        )

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=response.text)

        letter = ""
        for line in response.iter_lines():
            if line:
                try:
                    chunk = line.decode("utf-8").strip()
                    data = json.loads(chunk)
                    letter += data.get("response", "")
                except Exception as e:
                    print("⚠️ Could not decode chunk:", chunk, e)

        return { "letter": letter.strip() }

    except requests.exceptions.Timeout:
        raise HTTPException(status_code=504, detail="Ollama request timed out.")
    except Exception as e:
        print("🔥 Exception:", e)
        raise HTTPException(status_code=500, detail="Something went wrong.")