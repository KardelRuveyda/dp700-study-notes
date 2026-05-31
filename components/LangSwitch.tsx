// components/LangSwitch.tsx
// EN/TR toggle with inline SVG flags (Windows-safe, no emoji deps).
"use client";

import { useLang } from "@/lib/i18n";

function FlagUK({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id="ukclip"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#ukclip)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagTR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="22" cy="20" r="9" fill="#fff" />
      <circle cx="25" cy="20" r="7" fill="#E30A17" />
      <polygon
        points="32,20 38,18 36,22 38,26 32,24 28,28 28,22 25,20 28,18 28,12"
        fill="#fff"
      />
    </svg>
  );
}

export default function LangSwitch() {
  const { lang, setLang } = useLang();

  const btn = "inline-flex items-center gap-1.5 px-3 py-2 text-xs transition-colors";
  const active = "bg-cyan-500 text-slate-950 font-semibold";
  const idle = "text-slate-300 hover:bg-slate-800";

  return (
    <div className="inline-flex rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`${btn} ${lang === "en" ? active : idle}`}
        aria-label="English"
      >
        <FlagUK className="w-4 h-3 rounded-[2px]" />
        EN
      </button>
      <button
        onClick={() => setLang("tr")}
        className={`${btn} ${lang === "tr" ? active : idle}`}
        aria-label="Türkçe"
      >
        <FlagTR className="w-4 h-3 rounded-[2px]" />
        TR
      </button>
    </div>
  );
}
