"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

const initialForm = {
  nickname: "",
  email: "",
  profileUrl: "",
};

function normalizeProfileUrl(profileUrl) {
  return /^https?:\/\//i.test(profileUrl)
    ? profileUrl
    : `https://${profileUrl}`;
}

function validateForm(form) {
  if (!form.nickname.trim()) return "Укажите ник.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return "Введите корректный email.";
  }
  if (!form.profileUrl.trim()) return "Укажите ссылку на профиль.";

  try {
    const profileUrl = new URL(normalizeProfileUrl(form.profileUrl.trim()));
    if (!["http:", "https:"].includes(profileUrl.protocol)) {
      return "Укажите корректную ссылку на профиль.";
    }
  } catch {
    return "Укажите корректную ссылку на профиль.";
  }

  return null;
}

export default function HunterLeadForm() {
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
      const { error } = await supabase.from("hunter_leads").insert({
        nickname: form.nickname.trim(),
        contact_email: form.email.trim(),
        profile_link: normalizeProfileUrl(form.profileUrl.trim()),
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
          htmlFor="hunter-nickname"
        >
          Ник
        </label>
        <input
          autoComplete="nickname"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="hunter-nickname"
          name="nickname"
          onChange={updateField}
          required
          value={form.nickname}
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="hunter-email"
        >
          Email
        </label>
        <input
          autoComplete="email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="hunter-email"
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
          htmlFor="hunter-profile-url"
        >
          Ссылка на профиль
        </label>
        <input
          autoComplete="url"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          id="hunter-profile-url"
          name="profileUrl"
          onChange={updateField}
          placeholder="https://"
          required
          type="url"
          value={form.profileUrl}
        />
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
        className="w-full rounded-xl bg-[#794525] px-5 py-3 font-semibold text-[#f4e8d0] transition hover:bg-[#9a572e] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
      </button>
    </form>
  );
}
