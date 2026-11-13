"use client";

import { FormEvent, useState } from "react";
import { contactLinks } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Open channel</p>
          <h2 className="section-heading reveal visible">Let&apos;s build something sharp.</h2>
          <p className="section-copy reveal visible">
            Open to analyst, data, AI, and business intelligence opportunities where accuracy, pace, and clear thinking matter.
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-panel reveal visible">
            <h3>Reach me directly</h3>
            <p style={{ marginTop: "0.75rem", lineHeight: 1.75 }}>
              I respond best to clear briefs, role conversations, and practical project ideas. Send the context, expected outcome, and timeline.
            </p>
            <div className="contact-link-grid" style={{ marginTop: "1.25rem" }}>
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="form-card reveal reveal-delay-1 visible">
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label className="field-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="field-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea
                  className="contact-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me what you are building or hiring for"
                  required
                />
              </div>

              <button type="submit" disabled={status === "sending"} className="btn-primary">
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
              </button>
              {status === "error" && <p style={{ color: "var(--accent-4)", fontSize: "0.9rem" }}>Something went wrong. Please email me directly.</p>}
            </form>
          </div>
        </div>

        <div className="footer-line">
          <p>&copy; 2026 Rafi Uddin. Built for clarity, speed, and useful decisions.</p>
        </div>
      </div>
    </section>
  );
}
