// components/Flashcards.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Flashcard } from "@/data/modules";
import { useLang } from "@/lib/i18n";

type Props = { cards: Flashcard[]; onFinish: () => void };

export default function Flashcards({ cards, onFinish }: Props) {
  const { t, pick } = useLang();
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[idx];
  const isLast = idx === cards.length - 1;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="flex justify-between text-sm text-slate-400 mb-3">
        <span>{t("card")} {idx + 1} / {cards.length}</span>
        <span>{t("reviewTime")}</span>
      </div>

      <motion.div
        key={`${idx}-${flipped}`}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => setFlipped((f) => !f)}
        className="cursor-pointer min-h-[180px] rounded-xl border border-slate-700 bg-slate-800 p-6 flex items-center justify-center text-center"
      >
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
            {flipped ? t("answer") : t("question")}
          </p>
          <p className="text-lg text-white">{flipped ? pick(card.a) : pick(card.q)}</p>
          {!flipped && <p className="text-xs text-slate-500 mt-3">{t("tapToFlip")}</p>}
        </div>
      </motion.div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => { setFlipped(false); setIdx((i) => Math.max(0, i - 1)); }}
          disabled={idx === 0}
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-40"
        >
          {t("prev")}
        </button>
        {isLast ? (
          <button
            onClick={onFinish}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
          >
            {t("finishModule")}
          </button>
        ) : (
          <button
            onClick={() => { setFlipped(false); setIdx((i) => i + 1); }}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
          >
            {t("nextQ")}
          </button>
        )}
      </div>
    </div>
  );
}
