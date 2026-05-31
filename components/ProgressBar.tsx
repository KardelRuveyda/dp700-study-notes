// components/ProgressBar.tsx
"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

type Props = { value: number; total: number };

export default function ProgressBar({ value, total }: Props) {
  const { t } = useLang();
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-slate-300 mb-2">
        <span>{t("overallProgress")}</span>
        <span className="font-semibold text-emerald-400">
          {value}/{total} {t("modulesDone")} · {pct}%
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
