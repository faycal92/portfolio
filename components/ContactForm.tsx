"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "movevtc.fr@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@exemple.com"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Parlez-moi de votre projet..."
          className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
      >
        Envoyer le message
      </button>

      {sent && (
        <p className="text-center text-sm text-primary">
          Votre client email va s&apos;ouvrir pour finaliser l&apos;envoi.
        </p>
      )}
    </form>
  );
}
