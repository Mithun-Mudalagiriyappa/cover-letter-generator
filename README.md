# ✨ Cover Letter Generator

An AI-powered web application for generating personalized cover letters using Angular (frontend), FastAPI (backend), and [Ollama](https://ollama.com/download) for local LLM integration.

---

## 🧰 Technology Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | Angular 20               |
| Backend   | FastAPI + Uvicorn        |
| AI Engine | Ollama with Mistral model|

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mithun-Mudalagiriyappa/cover-letter-generator.git
cd cover-letter-generator
```
### 2️⃣ Install Dependencies
#### Backend
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # On Windows
pip install -r requirements.txt
```
#### Frontend
```bash
cd ../frontend
npm install
```
### 3️⃣ Install Ollama
Follow the installation guide: 👉 https://ollama.com/download
Then pull the mistral model:
```bash
ollama run mistral
```

### 4️⃣ Run the App Without Docker (Dev Mode)
#### 🧠Ollama
```bash
ollama serve
```
#### 🧬 Backend
```bash
cd backend
uvicorn app.main:app --reload
```
#### 🖥️ Frontend
```bash
cd frontend
ng serve
```
Visit your app at 👉 http://localhost:4200

---
## 🛠️ Features
* Form-based UI to enter name, role, experience, and skills
* AI-generated letter via streaming API
* Live preview as text streams in
* Easily customizable for other LLM models or use-cases
---
## 🧪 Troubleshooting
### 🔁 Model Timeout
If backend times out contacting Ollama, make sure you’ve run:
```bash
ollama run mistral
```
at least once.

### 🧾 Verify Ollama Server Is Running
* Visit http://localhost:11434
* You should see:
```json
{"message":"Ollama is running"}
```
---
## 🧰 Sample Screenshots
* Screenshots added in the samples folder
---
## 👤 Author

**Mithun Mudalagiriyappa**  
📍 Bengaluru, India  
🚀 Passionate about building real-world AI tools using agentic systems, LangChain, and local LLMs via Ollama.  

GitHub: [@Mithun-Mudalagiriyappa](https://github.com/Mithun-Mudalagiriyappa)
