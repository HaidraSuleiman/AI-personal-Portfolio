import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const API_BASE = import.meta.env.VITE_TWIN_API_URL || '';
const CHAT_TIMEOUT_MS = 90000;
const MAX_ATTEMPTS = 3;
const RETRY_STATUSES = new Set([502, 503, 504]);

const EXAMPLES = [
  'Tell me about your background and experience.',
  'What kinds of projects are you working on now?',
  'What are your strongest technical skills?',
  'How can I get in touch with you?',
];

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function postChat(message, history, attempt = 1) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), CHAT_TIMEOUT_MS);

  try {
    const res = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
      signal: controller.signal,
    });

    if (RETRY_STATUSES.has(res.status) && attempt < MAX_ATTEMPTS) {
      await delay(1500 * attempt);
      return postChat(message, history, attempt + 1);
    }
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return res.json();
  } catch (err) {
    const canRetry =
      attempt < MAX_ATTEMPTS &&
      (err.name === 'AbortError' || err.name === 'TypeError');
    if (canRetry) {
      await delay(1500 * attempt);
      return postChat(message, history, attempt + 1);
    }
    throw err;
  } finally {
    window.clearTimeout(timer);
  }
}

function TwinChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [waking, setWaking] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, waking]);

  useEffect(() => {
    if (!loading) inputRef.current?.focus({ preventScroll: true });
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      setWaking(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setWaking(true), 4000);
    return () => window.clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    const section = document.getElementById('twin');
    if (!section) return undefined;

    let warmed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || warmed) return;
        warmed = true;
        fetch(`${API_BASE}/api/health`).catch(() => {});
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  async function send(text) {
    const message = text.trim();
    if (!message || loading) return;

    const history = messages;
    setMessages([...history, { role: 'user', content: message }]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const data = await postChat(message, history);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError('The twin is starting up. Please send that again in a moment.');
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    send(input);
  }

  return (
    <section className="section" id="twin">
      <div className="section-header">
        <h2>Talk to My AI Twin</h2>
        <p>
          A digital twin of me, powered by an LLM agent with my career context.
          Ask it anything about my background, skills, and experience.
        </p>
        <p className="twin-notify-note">
          Leave your name and email in the chat and I will get a notification
          that you want to get in touch.
        </p>
      </div>

      <div className="twin-chat">
        <div className="twin-messages" ref={scrollRef}>
          {messages.length === 0 && !loading && (
            <div className="twin-empty">
              <p className="twin-empty-title">
                Hi, I'm Haidra's AI twin. What would you like to know?
              </p>
              <div className="twin-examples">
                {EXAMPLES.map((example) => (
                  <button
                    key={example}
                    type="button"
                    className="twin-example"
                    onClick={() => send(example)}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`twin-message twin-message-${msg.role}`}>
              {msg.role === 'assistant' ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
          ))}

          {loading && (
            <div className="twin-message twin-message-assistant twin-typing">
              <div className="twin-typing-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              {waking && (
                <p className="twin-typing-copy">
                  Starting the twin up — the first reply can take a little longer.
                </p>
              )}
            </div>
          )}
        </div>

        {error && <p className="twin-error">{error}</p>}

        <form className="twin-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            id="twin-input"
            type="text"
            className="twin-input"
            placeholder="Ask about my experience, projects, or skills..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={loading}
            aria-label="Message the AI twin"
          />
          <button
            type="submit"
            className="twin-send"
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default TwinChat;
