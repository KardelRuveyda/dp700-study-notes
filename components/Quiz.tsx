// components/Quiz.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestion } from "@/data/modules";
import { useLang } from "@/lib/i18n";

type Props = {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
};

export default function Quiz({ questions, onComplete }: Props) {
  const { t, pick } = useLang();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const isLast = idx === questions.length - 1;

  function handlePick(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      setDone(true);
      onComplete(score, questions.length);
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center"
      >
        <h3 className="text-2xl font-bold text-emerald-400 mb-2">{t("quizDone")}</h3>
        <p className="text-slate-300">
          {t("score")}: <span className="font-bold text-white">{score} / {questions.length}</span> ({pct}%)
        </p>
      </motion.div>
    );
  }

  const options = pick(q.options);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="flex justify-between text-sm text-slate-400 mb-3">
        <span>{t("question")} {idx + 1} / {questions.length}</span>
        <span>{t("score")}: {score}</span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-4">{pick(q.question)}</h3>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const isCorrect = i === q.correctIndex;
          const isPicked = selected === i;
          const showState = selected !== null;
          let cls = "border-slate-700 bg-slate-800 hover:border-cyan-500";
          if (showState && isCorrect) cls = "border-emerald-500 bg-emerald-900/30";
          else if (showState && isPicked && !isCorrect) cls = "border-rose-500 bg-rose-900/30";

          return (
            <button
              key={i}
              onClick={() => handlePick(i)}
              disabled={selected !== null}
              className={`w-full text-left rounded-lg border px-4 py-3 transition-colors ${cls} disabled:cursor-not-allowed`}
            >
              <span className="text-slate-200">{opt}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg bg-slate-800 border border-slate-700"
          >
            <p className="text-sm text-slate-200">
              {selected === q.correctIndex ? t("correct") : t("wrong")} {pick(q.explanation)}
            </p>
            <button
              onClick={next}
              className="mt-3 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
            >
              {isLast ? t("finishQuiz") : t("nextQ")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
