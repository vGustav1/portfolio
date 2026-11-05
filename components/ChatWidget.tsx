"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

const API = process.env.NEXT_PUBLIC_CHAT_API_URL;

const txt = {
  open: { pt: "Pergunte sobre mim", en: "Ask about me" },
  title: { pt: "Assistente do Gustavo", en: "Gustavo's assistant" },
  hello: {
    pt: "Oi! Sou o assistente do portfólio. Pergunte sobre a formação, os projetos ou as habilidades do Gustavo.",
    en: "Hi! I'm the portfolio assistant. Ask about Gustavo's education, projects or skills.",
  },
  placeholder: { pt: "Digite sua pergunta…", en: "Type your question…" },
  send: { pt: "Enviar", en: "Send" },
  close: { pt: "Fechar", en: "Close" },
  thinking: { pt: "Pensando…", en: "Thinking…" },
  error: { pt: "Não consegui responder agora. Tente de novo em instantes.", en: "I couldn't answer right now. Please try again shortly." },
  note: { pt: "Respostas geradas por IA a partir do currículo do Gustavo.", en: "AI-generated answers based on Gustavo's résumé." },
  suggestions: {
    pt: ["Quais projetos ele já fez?", "Ele tem experiência com SQL?", "Como entro em contato?"],
    en: ["What projects has he built?", "Does he know SQL?", "How can I contact him?"],
  },
};

export default function ChatWidget() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  if (!API) return null;

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;
    const history = msgs.slice(-6);
    setMsgs((m) => [...m, { role: "user", content: message }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "assistant", content: res.ok ? data.answer : data.detail ?? t(txt.error) }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: t(txt.error) }]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <>
      {!open && (
        <button type="button" className="chat-fab" onClick={() => setOpen(true)} aria-label={t(txt.open)}>
          <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
            <polygon points="10,8 38,8 46,18 44,32 34,38 18,38 8,46 10,36 3,28 3,16" fill="#1FB5C2" />
            <polygon points="10,8 38,8 24,22" fill="#7FF7FF" />
            <polygon points="38,8 46,18 24,22" fill="#2EF2FF" />
            <polygon points="3,16 10,8 24,22" fill="#4FF5FF" />
            <polygon points="14,22 16,20 18,22 16,24" fill="#0B0016" />
            <polygon points="22,22 24,20 26,22 24,24" fill="#0B0016" />
            <polygon points="30,22 32,20 34,22 32,24" fill="#0B0016" />
          </svg>
          <span>{t(txt.open)}</span>
        </button>
      )}

      {open && (
        <section className="chat-panel card" role="dialog" aria-label={t(txt.title)}>
          <header className="chat-head">
            <b>{t(txt.title)}</b>
            <button type="button" onClick={() => setOpen(false)} aria-label={t(txt.close)}>✕</button>
          </header>

          <div className="chat-list" ref={listRef} aria-live="polite">
            <p className="chat-msg bot">{t(txt.hello)}</p>
            {msgs.map((m, i) => (
              <p key={i} className={`chat-msg ${m.role === "user" ? "me" : "bot"}`}>{m.content}</p>
            ))}
            {loading && <p className="chat-msg bot lbl">{t(txt.thinking)}</p>}
            {msgs.length === 0 && (
              <div className="chat-suggestions">
                {txt.suggestions[lang].map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-form" onSubmit={onSubmit}>
            <input
              className="input"
              value={input}
              maxLength={500}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t(txt.placeholder)}
              aria-label={t(txt.placeholder)}
            />
            <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>{t(txt.send)}</button>
          </form>
          <p className="chat-note">{t(txt.note)}</p>
        </section>
      )}
    </>
  );
}
