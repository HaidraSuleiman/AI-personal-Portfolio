import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel

from context import TWIN_SYSTEM_PROMPT
from tools import handle_tool_calls, tools

load_dotenv(override=True)

MODEL_NAME = "gpt-5.4-mini"
MAX_HISTORY_MESSAGES = 40

openai = OpenAI(timeout=90.0)

app = FastAPI(title="Digital Twin API")

# Comma-separated list of allowed origins, e.g. "https://mysite.com,https://www.mysite.com"
allowed_origins = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_methods=["*"],
    allow_headers=["*"],
)


class HistoryMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[HistoryMessage] = []


class ChatResponse(BaseModel):
    reply: str


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    message = request.message.strip()
    if not message:
        raise HTTPException(status_code=422, detail="Message cannot be empty")

    history = [
        {"role": m.role, "content": m.content}
        for m in request.history[-MAX_HISTORY_MESSAGES:]
        if m.role in ("user", "assistant")
    ]
    messages = (
        [{"role": "system", "content": TWIN_SYSTEM_PROMPT}]
        + history
        + [{"role": "user", "content": message}]
    )

    response = openai.chat.completions.create(model=MODEL_NAME, messages=messages, tools=tools)
    while response.choices[0].finish_reason == "tool_calls":
        assistant_message = response.choices[0].message
        results = handle_tool_calls(assistant_message.tool_calls)
        messages.append(assistant_message)
        messages.extend(results)
        response = openai.chat.completions.create(
            model=MODEL_NAME, messages=messages, tools=tools
        )

    return ChatResponse(reply=response.choices[0].message.content)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", "8000")))
