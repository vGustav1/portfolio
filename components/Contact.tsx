"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Briefcase, Chat, Mail, Phone, Terminal } from "./LowPoly";

type Status = "idle" | "sending" | "ok" | "fail";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const errors = {
    name: !form.name.trim(),
    email: !EMAIL_RE.test(form.email.trim()),
    message: !form.message.trim(),
  };
  const invalid = errors.name || errors.email || errors.message;

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (status !== "sending") setStatus("idle");
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (invalid) return;
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        { from_name: form.name, reply_to: form.email, message: form.message },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "" },
      );
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setTried(false);
    } catch {
      setStatus("fail");
    }
  }

  const channels = [
    { href: `mailto:${profile.links.email}`, icon: <Mail />, title: "E-mail", value: profile.links.email },
    { href: `https://wa.me/${profile.links.whatsapp}`, icon: <Chat />, title: "WhatsApp", value: "WhatsApp" },
    { href: profile.links.linkedin, icon: <Briefcase />, title: "LinkedIn", value: profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, "") },
    { href: profile.links.github, icon: <Terminal />, title: "GitHub", value: profile.links.github.replace(/^https?:\/\/(www\.)?/, "") },
  ];

  return (
    <section id="contato" className="container section">
      <div className="section-head">
        <Phone />
        <div>
          <h2 className="neon tilt">{t(ui.nav.contact)}</h2>
          <p className="sub">{t(ui.contact.sub)}</p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="channels">
          {channels.map((c) => (
            <a key={c.title} className="card channel" href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
              {c.icon}
              <span>
                <b>{c.title}</b>
                <span className="lbl">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        <form className="card form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="f-name">{t(ui.contact.name)} *</label>
            <input id="f-name" className="input" type="text" autoComplete="name" value={form.name} onChange={update("name")} aria-invalid={tried && errors.name} aria-describedby={tried && errors.name ? "e-name" : undefined} />
            {tried && errors.name && <span id="e-name" className="error">{t(ui.contact.errName)}</span>}
          </div>
          <div className="field">
            <label htmlFor="f-email">{t(ui.contact.email)} *</label>
            <input id="f-email" className="input" type="email" autoComplete="email" placeholder="voce@email.com" value={form.email} onChange={update("email")} aria-invalid={tried && errors.email} aria-describedby={tried && errors.email ? "e-email" : undefined} />
            {tried && errors.email && <span id="e-email" className="error">{t(ui.contact.errEmail)}</span>}
          </div>
          <div className="field">
            <label htmlFor="f-msg">{t(ui.contact.message)} *</label>
            <textarea id="f-msg" className="input" rows={5} value={form.message} onChange={update("message")} aria-invalid={tried && errors.message} aria-describedby={tried && errors.message ? "e-msg" : undefined} />
            {tried && errors.message && <span id="e-msg" className="error">{t(ui.contact.errMsg)}</span>}
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? t(ui.contact.sending) : t(ui.contact.send)}
            </button>
            <span className="lbl">* {t(ui.contact.required)}</span>
          </div>
          <div aria-live="polite">
            {status === "ok" && <p className="status">{t(ui.contact.ok)}</p>}
            {status === "fail" && <p className="status fail">{t(ui.contact.fail)}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
