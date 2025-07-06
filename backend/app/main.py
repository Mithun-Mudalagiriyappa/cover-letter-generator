from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from app.models import LetterRequest
from app.prompt_engine import generate_prompt
from fastapi.middleware.cors import CORSMiddleware

import requests
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # or ["*"] for all origins (use carefully)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
def generate_letter(payload: LetterRequest):
    prompt = generate_prompt(payload)
    print("Prompt:", prompt)

    def stream():
        try:
            response = requests.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "mistral",
                    "prompt": prompt,
                    "stream": True
                },
                stream=True,
                timeout=300
            )

            if response.status_code != 200:
                print("Ollama API error:", response.text)
                yield "[Error: Ollama returned non-200 status]"
                return

            for line in response.iter_lines():
                if line:
                    try:
                        chunk = line.decode("utf-8").strip()
                        print("Chunk received:", chunk)
                        data = json.loads(chunk)
                        yield data.get("response", "")
                    except Exception as e:
                        print("Could not decode chunk:", chunk, e)
                        yield f"[Decode error: {e}]"

        except requests.exceptions.Timeout:
            yield "[Error: Ollama request timed out]"
        except Exception as e:
            print("Exception in stream():", e)
            yield "[Unexpected error occurred]"

    return StreamingResponse(stream(), media_type="text/plain")