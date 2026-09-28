"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

const initialForm = {
  companyName: "",
  email: "",
  website: "",
  budget: "",
};

function normalizeWebsite(website) {
  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
}

function validateForm(form) {
  if (!form.companyName.trim()) return "Укажите название компании.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return "Введите корректный email.";
  }
  if (!form.website.trim()) return "Укажите сайт компании.";

  try {
    const website = new URL(normalizeWebsite(form.website.trim()));
    if (!["http:", "https:"].includes(website.protocol)) {
      return "Укажите корректный адрес сайта.";
    }
  } catch {
    return "Укажите корректный адрес сайта.";
  }

  if (!form.budget) return "Выберите бюджет.";
  return null;
}

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setMessage(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage(null);

    const validationError = validateForm(form);
    if (validationError) {
      setMessage({ type: "error", text: validationError });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("client_leads").insert({
        company_name: form.companyName.trim(),
        email: form.email.trim(),
        website: normalizeWebsite(form.website.trim()),
        budget: form.budget,
      });

      if (error) {
        setMessage({
          type: "error",
          text: `Не удалось отправить заявку: ${error.message}`,
        });
        return;
      }

      setForm(initialForm);
      setMessage({ type: "success", text: "Заявка успешно отправлена." });
    } catch (error) {
      setMessage({
        type: "error",
        text: `Не удалось отправить заявку: ${
          error instanceof Error ? error.message : "попробуйте еще раз."
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="company-name"
        >
          Название компании
        </label>
        <input
          autoComplete="organization"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="company-name"
          name="companyName"
          onChange={updateField}
          required
          value={form.companyName}
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="client-email"
        >
          Email
        </label>
        <input
          autoComplete="email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="client-email"
          name="email"
          onChange={updateField}
          required
          type="email"
          value={form.email}
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="company-website"
        >
          Сайт
        </label>
        <input
          autoComplete="url"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="company-website"
          name="website"
          onChange={updateField}
          placeholder="example.com"
          required
          type="url"
          value={form.website}
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="client-budget"
        >
          Бюджет
        </label>
        <select
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="client-budget"
          name="budget"
          onChange={updateField}
          required
          value={form.budget}
        >
          <option value="">Выберите бюджет</option>
          <option value="50-100к">50-100к</option>
          <option value="100-300к">100-300к</option>
          <option value="300к+">300к+</option>
        </select>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.type === "error" ? "text-red-600" : "text-emerald-700"
          }`}
          role={message.type === "error" ? "alert" : "status"}
        >
          {message.text}
        </p>
      )}

      <button
        className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}
