from pydantic import BaseModel

class LetterRequest(BaseModel):
    name: str
    role: str
    experience: str
    skills: str