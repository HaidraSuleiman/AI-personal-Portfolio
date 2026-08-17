# Haidra Suleiman - AI Engineering Portfolio

This is a React + Vite single-page application showcasing AI engineering projects and skills, with an integrated "AI Twin" chat section backed by a FastAPI + OpenAI service.

## Visit Website:
https://ai-personal-portfolio-flax.vercel.app/

## Project structure

- `src/` — React frontend (Vite). The AI Twin chat lives in `src/components/TwinChat.jsx`.
- `backend/` — FastAPI service powering the twin: OpenAI chat with career context (`summary.txt` + `linkedin.pdf`) and tool calls that send Pushover notifications for contact requests and unanswered questions.

## Running locally

### 1. Backend (AI Twin API)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate      # Windows
pip install -r requirements.txt
copy .env.example .env       # then fill in OPENAI_API_KEY (and optionally Pushover keys)
uvicorn main:app --reload --port 8000
```

### 2. Frontend

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:8000`, so the chat works out of the box in development.

## Production

| Piece | Host | URL |
| --- | --- | --- |
| Frontend | Vercel | https://ai-personal-portfolio-flax.vercel.app/ |
| Backend (AI Twin API) | Railway | https://twin-api-production-e745.up.railway.app |

The live site calls the Railway API directly. CORS on the backend allows the Vercel origin (and `*.vercel.app` preview URLs). Production builds read `VITE_TWIN_API_URL` from `.env.production`.

The `twin-api` service currently lives in the existing **Document Pilot** Railway project (the Free plan does not allow a new project). Railway dashboard: https://railway.com/project/d3b6b936-7ac0-463c-b468-96012b6e269f/service/9920b7a2-0eb7-4ee5-a12c-ebf64fa1696e

Secrets (`OPENAI_API_KEY`, Pushover keys) are set on Railway — they are not committed to git.
