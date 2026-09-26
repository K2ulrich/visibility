"use client";

import { useState } from "react";
import { sendContactMessage } from "@/lib/emailjs";
import { contactOptions } from "@/lib/data";

const initialState = {
  name: "",
  email: "",
  phone: "",
  projectType: contactOptions.projectTypes[0],
  budget: contactOptions.budgets[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMessage("Merci de remplir au moins votre nom, votre email et votre message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue lors de l'envoi. Vous pouvez réessayer ou m'écrire directement par email."
      );
    }
  }

  const inputClass =
    "w-full rounded border border-ink-line bg-ink-soft px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-gold outline-none transition-colors";
  const labelClass = "block text-sm text-muted mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Nom / Entreprise</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Téléphone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>Type de projet</label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={inputClass}
          >
            {contactOptions.projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>Budget estimatif</label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={inputClass}
        >
          {contactOptions.budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded bg-gold px-7 py-3 text-sm font-medium font-display text-ink hover:bg-gold-soft transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-teal-soft pt-2">
            Votre message a bien été envoyé. Nous reviendrons vers vous dans les meilleurs délais.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400 pt-2">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
