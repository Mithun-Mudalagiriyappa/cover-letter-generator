from app.models import LetterRequest

def generate_prompt(data: LetterRequest) -> str:
    return (
        f"Write a professional and enthusiastic cover letter for {data.name}.\n"
        f"Role: {data.role}\n"
        f"Experience: {data.experience}\n"
        f"Skills: {data.skills}\n"
    )