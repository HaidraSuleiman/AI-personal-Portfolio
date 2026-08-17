import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const API_BASE = import.meta.env.VITE_TWIN_API_URL || '';

const EXAMPLES = [
  'Tell me about your background and experience.',
  'What kinds of projects are you working on now?',
  'What are your strongest technical skills?',
  'How can I get in touch with you?',
];

function TwinChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (!loading) inputRef.current?.focus({ preventScroll: true });
  }, [loading]);

  async function send(text) {
    const message = text.trim();
    if (!message || loading) return;

    const history = messages;
    setMessages([...history, { role: 'user', content: message }]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError('Something went wrong reaching my AI twin. Please try again in a moment.');
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
              <span />
              <span />
              <span />
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
