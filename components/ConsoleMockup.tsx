// components/ConsoleMockup.tsx
// Azure Cloud Shell görünümü taklit eden mockup. Lines array'i ile esnek.
"use client";

import { motion } from "framer-motion";

export type ConsoleLine = {
  text: string;
  tone?: "prompt" | "output" | "warn" | "info" | "success" | "muted" | "comment";
};

type Props = {
  shell?: "PowerShell" | "Bash";
  title?: string;
  lines: ConsoleLine[];
  caption?: string;
};

const toneClass: Record<NonNullable<ConsoleLine["tone"]>, string> = {
  prompt: "text-emerald-300",
  output: "text-slate-100",
  warn: "text-amber-300",
  info: "text-cyan-300",
  success: "text-emerald-400 font-semibold",
  muted: "text-slate-500",
  comment: "text-slate-500 italic",
};

export default function ConsoleMockup({ shell = "PowerShell", title, lines, caption }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden border border-slate-700 shadow-lg"
    >
      {/* Azure-style top bar */}
      <div className="bg-[#0078d4] px-3 py-1.5 text-xs text-white flex items-center gap-2">
        <span className="opacity-80">≡</span>
        <span className="font-semibold">Microsoft Azure</span>
        <span className="opacity-60">{title ?? "(Preview)"}</span>
        <span className="ml-auto flex gap-1 opacity-80">
          <span>⚙️</span><span>🔔</span><span>👤</span>
        </span>
      </div>
      {/* Shell toolbar */}
      <div className="bg-[#1b2735] px-3 py-1.5 text-xs text-slate-200 flex items-center gap-3 border-b border-slate-700">
        <span className="px-2 py-0.5 rounded bg-slate-700">{shell} ▾</span>
        <span className="opacity-60">⏻</span>
        <span className="opacity-60">?</span>
        <span className="opacity-60">⚙</span>
        <span className="opacity-60">⬆</span>
        <span className="opacity-60">⬇</span>
        <span className="opacity-60">{"{ }"}</span>
      </div>
      {/* Terminal area */}
      <pre className="bg-[#012456] text-slate-100 px-4 py-3 text-[13px] leading-6 overflow-x-auto font-mono">
        {lines.map((l, i) => (
          <div key={i} className={toneClass[l.tone ?? "output"]}>
            {l.text || "\u00A0"}
          </div>
        ))}
      </pre>
      {caption && (
        <div className="bg-slate-900 text-slate-400 text-xs px-3 py-2 border-t border-slate-700">
          {caption}
        </div>
      )}
    </motion.div>
  );
}
