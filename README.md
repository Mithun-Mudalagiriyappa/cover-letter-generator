#COVER LETTER GENERATOR:
An AI-powered web application for generating personalized cover letters using Angular (frontend), FastAPI (backend), and Ollama for local LLM integratioN.

TECHNOLOGY STACK:
| Layer     | Technology
| Frontend  | Angular 20  
| Backend   | FastAPI + Uvicorn 
| AI Engine | Ollama with mistral model

GETTING STARTED:
1. Clone the Repository
Bash: git clone https://github.com/Mithun-Mudalagiriyappa/cover-letter-generator.git
      cd <your-repo>

2. INSTALL DEPENDENCIES:
A. BACKEND
Bash: cd backend
      python -m venv venv
      source venv\Scripts\activate (on Windows)
      pip install -r requirements.txt

B. FRONTEND
Bash: cd ../frontend
      npm install

3. INSTALL OLLAMA
Follow the installation guide for your platform:
URL: https://ollama.com/download

Then download the Mistral model locally:
Bash: ollama run mistral

4. RUN THE APP WITHOUT DOCKER (DEV MODE):
A. OLLAMA
Bash: ollama serve

B. BACKEND
Bash: uvicorn app.main:app --reload

C. FRONTEND
Bash: cd frontend
      ng serve

Visit: http://localhost:4200/

5. FEATURES:
- Form-based UI to enter name, role, experience, and skills
- AI-generated letter via streaming API
- Live preview as text streams in
- Easily customizable for other LLM models or use-cases

6. Troubleshooting
A. Model Timeout: If backend times out contacting Ollama, ensure "ollama run mistral" was executed at least once.

B. How to Check If Ollama Is Already Listening: 
a) Run http://localhost:11434 on any browser
b) Json: {"message":"Ollama is running"} 
