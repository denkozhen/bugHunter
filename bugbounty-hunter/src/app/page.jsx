"use client";

import { useState } from "react";
import HunterLeadForm from "../../components/HunterLeadForm";
import LeadForm from "../../components/LeadForm";

const steps = [
  {
    number: "01",
    title: "Выбери цель",
    description:
      "Найди программу и изучи правила. У каждой цели — свои границы и своя награда.",
  },
  {
    number: "02",
    title: "Ищи следы",
    description:
      "Проверь сайт или приложение на уязвимости. Работай аккуратно и по правилам.",
  },
  {
    number: "03",
    title: "Забери награду",
    description:
      "Отправь понятный отчет. Подтвержденный баг принесет тебе заслуженную награду.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <main className="min-h-screen overflow-hidden bg-[#211810] text-[#f4e8d0]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:radial-gradient(#f4e8d0_0.7px,transparent_0.7px)] [background-size:8px_8px]" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          className="font-serif text-lg font-black uppercase tracking-[0.16em] text-[#e9b866]"
          href="#top"
        >
          Frontier<span className="text-[#f4e8d0]"> / </span>Bug bounty
        </a>
        <a
          className="hidden border border-[#b98b51]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#e9b866] transition hover:bg-[#b98b51]/10 sm:inline-flex"
          href="#join"
        >
          В путь
        </a>
      </nav>

      <section
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 sm:px-10 sm:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20"
        id="top"
      >
        <div>
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#d5a55e]">
            <span className="h-px w-10 bg-[#d5a55e]" />
            Охота начинается здесь
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-black uppercase leading-[0.98] tracking-tight text-[#f6ead2] sm:text-7xl xl:text-8xl">
            Найди баг
            <br />
            первым.
            <br />
            <span className="text-[#d79b4c]">Получи награду.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#c6b69d] sm:text-lg">
            Дикий Запад цифровой безопасности: компании выставляют цели,
            охотники находят уязвимости, а за каждый подтвержденный баг ждёт
            честная награда.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center bg-[#bd7838] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#211810] shadow-[5px_5px_0_#75472a] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#75472a]"
              href="#join"
            >
              Начать охоту <span aria-hidden="true" className="ml-3">→</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 border-2 border-[#a8f0e7] bg-[#168c83] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[5px_5px_0_#0d514c] transition hover:-translate-y-0.5 hover:bg-[#20a99d] hover:shadow-[6px_6px_0_#0d514c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a8f0e7]"
              href="https://t.me/bugbounty_wanted"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.8 4.2 18.5 20c-.25 1.12-.91 1.4-1.84.87l-5.08-3.75-2.45 2.36c-.27.27-.5.5-1.03.5l.36-5.17 9.4-8.5c.41-.36-.09-.56-.63-.2L5.6 13.4.57 11.82c-1.1-.35-1.12-1.1.23-1.63L20.47 2.6c.9-.33 1.69.22 1.33 1.6Z" />
              </svg>
              Следи за запуском в Telegram
            </a>
            <a
              className="inline-flex items-center px-5 py-4 text-sm font-bold text-[#e7d7bb] underline decoration-[#a77d4c] underline-offset-4 transition hover:text-white"
              href="#how-it-works"
            >
              Как это работает
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md rotate-1">
          <div className="absolute -inset-3 rotate-[-3deg] border border-dashed border-[#a77d4c]/60" />
          <div className="relative border-[7px] border-[#c79655] bg-[#ead9b9] p-2 text-[#392719] shadow-2xl">
            <div className="border border-[#7a5131] px-5 py-8 text-center sm:px-8 sm:py-10">
              <p className="font-serif text-xs font-bold uppercase tracking-[0.28em] text-[#765130]">
                Wanted · живой или цифровой
              </p>
              <div className="mx-auto my-6 flex h-40 w-40 items-center justify-center rounded-full border-[5px] border-[#5b3926] bg-[#c39a68] shadow-inner sm:h-48 sm:w-48">
                <span
                  aria-hidden="true"
                  className="font-serif text-8xl font-black text-[#4b3021]"
                >
                  ?
                </span>
              </div>
              <h2 className="font-serif text-3xl font-black uppercase tracking-[0.12em] sm:text-4xl">
                Уязвимость
              </h2>
              <p className="mt-2 font-serif text-sm font-bold uppercase tracking-[0.22em] text-[#765130]">
                Награда за информацию
              </p>
              <div className="my-5 border-t border-dashed border-[#7a5131]/60" />
              <p className="font-serif text-2xl font-black uppercase text-[#794525] sm:text-3xl">
                До 300 000 ₽+
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#765130]">
                Только по правилам программы
              </p>
            </div>
          </div>
          <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#aa9272]">
            Разыскивается: тот, кто заметит первым
          </p>
        </div>
      </section>

      <section
        className="relative border-y border-[#9b7447]/30 bg-[#302319] px-6 py-20 sm:px-10 sm:py-24"
        id="how-it-works"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#d5a55e]">
              Карта местности
            </p>
            <h2 className="font-serif text-4xl font-black uppercase sm:text-5xl">
              Как это работает
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                className="relative border border-[#9b7447]/50 bg-[#241a13] p-7 sm:p-8"
                key={step.number}
              >
                <span className="mb-8 inline-flex h-12 w-12 items-center justify-center border border-[#d5a55e] font-serif text-lg font-black text-[#d5a55e]">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl font-black uppercase text-[#f2dfbd]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c6b69d]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative px-6 py-20 sm:px-10 sm:py-24"
        id="join"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#d5a55e]">
              Твоё место у костра
            </p>
            <h2 className="font-serif text-4xl font-black uppercase sm:text-5xl">
              Вступай в игру
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#c6b69d]">
              Выбери свою сторону: выставь программу на охоту или докажи, что
              ты лучший следопыт.
            </p>
          </div>

          <div className="border border-[#a77d4c]/60 bg-[#ead9b9] p-2 text-[#302319] shadow-[8px_8px_0_#75472a] sm:p-3">
            <div className="border border-[#7a5131]/50 p-5 sm:p-8">
              <div
                aria-label="Тип заявки"
                className="mb-8 grid grid-cols-2 border-b border-[#8c6845]/40"
                role="tablist"
              >
                <button
                  aria-controls="lead-panel"
                  aria-selected={activeTab === "company"}
                  className={`border-b-2 px-3 py-4 text-sm font-black uppercase tracking-[0.1em] transition sm:text-base ${
                    activeTab === "company"
                      ? "border-[#9a572e] text-[#713d25]"
                      : "border-transparent text-[#765f47] hover:text-[#392719]"
                  }`}
                  id="company-tab"
                  onClick={() => setActiveTab("company")}
                  role="tab"
                  type="button"
                >
                  Я компания
                </button>
                <button
                  aria-controls="lead-panel"
                  aria-selected={activeTab === "hunter"}
                  className={`border-b-2 px-3 py-4 text-sm font-black uppercase tracking-[0.1em] transition sm:text-base ${
                    activeTab === "hunter"
                      ? "border-[#9a572e] text-[#713d25]"
                      : "border-transparent text-[#765f47] hover:text-[#392719]"
                  }`}
                  id="hunter-tab"
                  onClick={() => setActiveTab("hunter")}
                  role="tab"
                  type="button"
                >
                  Я хантер
                </button>
              </div>

              <div
                aria-labelledby={activeTab === "company" ? "company-tab" : "hunter-tab"}
                id="lead-panel"
                role="tabpanel"
              >
                {activeTab === "company" ? <LeadForm /> : <HunterLeadForm />}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#9b7447]/30 px-6 py-7 text-center text-xs uppercase tracking-[0.16em] text-[#aa9272]">
        Цифровой фронтир · Ищи честно. Сообщай ответственно.
      </footer>
    </main>
  );
}
