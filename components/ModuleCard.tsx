// components/ModuleCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Module } from "@/data/modules";
import { useLang, difficultyLabel } from "@/lib/i18n";

type Props = {
  module: Module;
  locked: boolean;
  completed: boolean;
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-500/20 text-emerald-300",
  Medium: "bg-amber-500/20 text-amber-300",
  Hard: "bg-rose-500/20 text-rose-300",
};

export default function ModuleCard({ module, locked, completed }: Props) {
  const { t, pick, lang } = useLang();

  const stateBadge = completed
    ? `✅ ${t("completed")}`
    : locked
    ? `🔒 ${t("locked")}`
    : `🔓 ${t("ready")}`;

  const content = (
    <motion.div
      whileHover={!locked ? { y: -4, scale: 1.01 } : {}}
      className={`rounded-2xl p-5 border transition-colors ${
        locked
          ? "border-slate-800 bg-slate-900/40 opacity-60"
          : completed
          ? "border-emerald-700 bg-emerald-900/20"
          : "border-slate-700 bg-slate-900 hover:border-cyan-500"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-400">{t("module")} {module.order}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor[module.difficulty]}`}>
          {difficultyLabel(module.difficulty, lang)}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{pick(module.title)}</h3>
      <p className="text-sm text-slate-400 mb-4">{pick(module.subtitle)}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">⏱ {module.estimatedMinutes} {t("minutes")}</span>
        <span className="text-slate-300">{stateBadge}</span>
      </div>
    </motion.div>
  );

  if (locked) return <div>{content}</div>;
  return <Link href={`/modules/${module.slug}`}>{content}</Link>;
}
