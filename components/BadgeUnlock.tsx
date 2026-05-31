// components/BadgeUnlock.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

type Props = {
  badgeEmoji: string;
  badgeName: string;
  completedCount: number;
  totalCount: number;
};

export default function BadgeUnlock({ badgeEmoji, badgeName, completedCount, totalCount }: Props) {
  const { t, lang } = useLang();

  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  const pct = Math.round((completedCount / totalCount) * 100);

  const line =
    lang === "en"
      ? <>You've completed <span className="text-white font-bold">{pct}%</span> {t("progressLine")}</>
      : <>AZ-104 yolunda <span className="text-white font-bold">%{pct}</span> tamamladın.</>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-emerald-700 bg-emerald-900/20 p-8 text-center"
    >
      <motion.div
        initial={{ rotate: -20, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="text-7xl mb-4"
      >
        {badgeEmoji}
      </motion.div>
      <h2 className="text-3xl font-bold text-white mb-2">{t("newBadge")}</h2>
      <p className="text-emerald-300 text-xl font-semibold mb-4">{badgeName}</p>
      <p className="text-slate-300 mb-2">{line}</p>
      <p className="text-slate-400 text-sm mb-6">
        {completedCount} / {totalCount} {t("stepCloser")}
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
      >
        {t("goHome")}
      </Link>
    </motion.div>
  );
}
