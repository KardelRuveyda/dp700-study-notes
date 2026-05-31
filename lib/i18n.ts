// lib/i18n.ts
// Bilingual EN/TR via React Context. Default = en. Persisted in localStorage.
"use client";

import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "tr";
export type Localized<T = string> = { en: T; tr: T };

const KEY = "dp700-lang";

const UI = {
  appTitle:       { en: "Exam Preparation",            tr: "Exam Preparation" },
  appTagline:     { en: "DP-700 · Gamified prep · Microsoft Learn powered",
                    tr: "DP-700 · Gamified hazırlık · Microsoft Learn destekli" },
  streak:         { en: "Streak",                      tr: "Streak" },
  xp:             { en: "XP",                          tr: "XP" },
  badges:         { en: "Badges",                      tr: "Rozetler" },
  overallProgress:{ en: "Overall Progress",            tr: "Genel İlerleme" },
  modulesHeader:  { en: "Modules",                     tr: "Modüller" },
  modulesDone:    { en: "modules",                     tr: "modül" },
  module:         { en: "Module",                      tr: "Modül" },
  minutes:        { en: "min",                         tr: "dk" },
  locked:         { en: "Locked",                      tr: "Kilitli" },
  ready:          { en: "Ready",                       tr: "Hazır" },
  completed:      { en: "Completed",                   tr: "Tamamlandı" },
  backHome:       { en: "← Home",                      tr: "← Ana sayfa" },
  stepLesson:     { en: "📘 Lesson",                   tr: "📘 Ders" },
  stepTask:       { en: "🛠 Task",                      tr: "🛠 Görev" },
  stepQuiz:       { en: "🧩 Quiz",                     tr: "🧩 Quiz" },
  stepFlash:      { en: "🃏 Flashcards",               tr: "🃏 Flashcards" },
  stepDone:       { en: "🎉 Done",                     tr: "🎉 Tamamlandı" },
  quickMap:       { en: "🗺 Quick Map",                tr: "🗺 Hızlı Harita" },
  story:          { en: "🎬 Story / Analogy",          tr: "🎬 Hikâye / Benzetme" },
  mnemonic:       { en: "Mnemonic",                    tr: "Mnemonic" },
  pitfalls:       { en: "⚠️ Exam Pitfalls",            tr: "⚠️ Sınav Tuzakları" },
  toTask:         { en: "Go to Task →",                tr: "Göreve Geç →" },
  scenario:       { en: "🎯 Scenario",                 tr: "🎯 Senaryo" },
  portalSteps:    { en: "Portal Steps",                tr: "Portal Adımları" },
  cliSteps:       { en: "CLI / PowerShell",            tr: "CLI / PowerShell" },
  checklist:      { en: "✅ Checklist",                tr: "✅ Checklist" },
  back:           { en: "← Back",                      tr: "← Geri" },
  toQuiz:         { en: "Go to Quiz →",                tr: "Quiz'e Geç →" },
  question:       { en: "Question",                    tr: "Soru" },
  score:          { en: "Score",                       tr: "Skor" },
  correct:        { en: "✅ Correct!",                 tr: "✅ Doğru!" },
  wrong:          { en: "❌ Wrong.",                   tr: "❌ Yanlış." },
  nextQ:          { en: "Next →",                      tr: "Sonraki →" },
  finishQuiz:     { en: "Finish",                      tr: "Bitir" },
  quizDone:       { en: "Quiz Complete! 🎉",           tr: "Quiz Bitti! 🎉" },
  card:           { en: "Card",                        tr: "Kart" },
  reviewTime:     { en: "Review time 🧠",              tr: "Tekrar zamanı 🧠" },
  answer:         { en: "Answer",                      tr: "Cevap" },
  tapToFlip:      { en: "(Tap to flip)",               tr: "(Çevirmek için tıkla)" },
  prev:           { en: "← Previous",                  tr: "← Önceki" },
  finishModule:   { en: "Finish Module 🎉",            tr: "Modülü Bitir 🎉" },
  newBadge:       { en: "New Badge!",                  tr: "Yeni Rozet!" },
  progressLine:   { en: "completed of DP-700.",        tr: "DP-700 yolunda tamamlandı." },
  stepCloser:     { en: "modules · One step closer to the exam 🚀",
                    tr: "modül · Sınava bir adım daha yakınsın 🚀" },
  goHome:         { en: "Back to home",                tr: "Ana sayfaya dön" },
  loading:        { en: "Loading…",                    tr: "Yükleniyor…" },
  source:         { en: "📚 Source: Microsoft Learn",  tr: "📚 Kaynak: Microsoft Learn" },
  openSource:     { en: "Open original on Microsoft Learn ↗",
                    tr: "Microsoft Learn'de orijinal sayfayı aç ↗" },
  reset:          { en: "Reset progress",              tr: "İlerlemeyi sıfırla" },
  resetConfirm:   { en: "Reset ALL progress? Completed modules, XP, streak and badges will be wiped.",
                    tr: "TÜM ilerleme sıfırlansın mı? Tamamlanan modüller, XP, streak ve rozetler silinecek." },
} satisfies Record<string, Localized>;

export type UIKey = keyof typeof UI;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: UIKey) => string;
  pick: <T>(loc: Localized<T>) => T;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(KEY)) as Lang | null;
    if (stored === "en" || stored === "tr") setLangState(stored);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    if (typeof window !== "undefined") localStorage.setItem(KEY, next);
  }

  const value: Ctx = {
    lang,
    setLang,
    t: (k) => UI[k][lang],
    pick: (loc) => loc[lang],
  };

  return createElement(LangContext.Provider, { value }, children);
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

export function difficultyLabel(d: "Easy" | "Medium" | "Hard", lang: Lang) {
  if (lang === "en") return d;
  return d === "Easy" ? "Kolay" : d === "Medium" ? "Orta" : "Zor";
}
