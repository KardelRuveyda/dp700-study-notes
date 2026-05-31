"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getModuleBySlug, totalModules } from "@/data/modules";
import { loadProgress, saveProgress, completeModule, type Progress } from "@/lib/progress";
import { useLang, type UIKey } from "@/lib/i18n";
import Quiz from "@/components/Quiz";
import Flashcards from "@/components/Flashcards";
import BadgeUnlock from "@/components/BadgeUnlock";
import LangSwitch from "@/components/LangSwitch";
import ConsoleMockup from "@/components/ConsoleMockup";
import EditorMockup from "@/components/EditorMockup";

type Step = "lesson" | "task" | "quiz" | "flashcards" | "done";
const STEPS: Step[] = ["lesson", "task", "quiz", "flashcards", "done"];
const STEP_KEYS: Record<Step, UIKey> = {
  lesson: "stepLesson",
  task: "stepTask",
  quiz: "stepQuiz",
  flashcards: "stepFlash",
  done: "stepDone",
};

export default function ModulePageClient({ slug }: { slug: string }) {
  const mod = getModuleBySlug(slug);
  const { t, pick } = useLang();
  const [step, setStep] = useState<Step>("lesson");
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    function handleReset() {
      setStep("lesson");
      setProgress(loadProgress());
    }
    window.addEventListener("dp700:progress-reset", handleReset);
    return () => window.removeEventListener("dp700:progress-reset", handleReset);
  }, []);

  useEffect(() => {
    if (progress && mod && step === "done" && !progress.completedModules.includes(mod.slug)) {
      setStep("lesson");
    }
  }, [progress, mod, step]);

  if (!mod) {
    return <div className="text-slate-400">{t("loading")}</div>;
  }
  if (!progress) return <div className="text-slate-400">{t("loading")}</div>;

  function finishModule() {
    if (!mod || !progress) return;
    const next = completeModule(progress, mod.slug, mod.badge.id, 100);
    saveProgress(next);
    setProgress(next);
    setStep("done");
  }

  const stepIdx = STEPS.indexOf(step);

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm text-cyan-400 hover:text-cyan-300">
          {t("backHome")}
        </Link>
        <LangSwitch />
      </div>

      <header>
        <p className="text-xs text-slate-400">{t("module")} {mod.order}</p>
        <h1 className="text-3xl font-bold text-white">{pick(mod.title)}</h1>
        <p className="text-slate-400 mt-1">{pick(mod.subtitle)}</p>
      </header>

      <div className="flex gap-2 flex-wrap">
        {STEPS.map((s, i) => (
          <span
            key={s}
            className={`px-3 py-1 rounded-full text-xs border ${
              i === stepIdx
                ? "bg-cyan-500 text-slate-950 border-cyan-500 font-semibold"
                : i < stepIdx
                ? "bg-emerald-900/30 text-emerald-300 border-emerald-700"
                : "bg-slate-900 text-slate-500 border-slate-700"
            }`}
          >
            {t(STEP_KEYS[s])}
          </span>
        ))}
      </div>

      <motion.section
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {step === "lesson" && (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-5">
            {mod.source && (
              <a
                href={mod.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-cyan-700 bg-cyan-900/20 text-cyan-300 hover:bg-cyan-900/40"
              >
                {t("source")} · {mod.source.label ?? t("openSource")}
              </a>
            )}
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">{t("quickMap")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                {pick(mod.lesson.quickMap).map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{t("story")}</h3>
              <p className="text-slate-300 leading-relaxed">{pick(mod.lesson.story)}</p>
            </div>
            {mod.lesson.visuals && mod.lesson.visuals.length > 0 && (
              <div className="space-y-4">
                {mod.lesson.visuals.map((v, i) => {
                  if (v.kind === "console") {
                    return (
                      <ConsoleMockup
                        key={i}
                        shell={(v as { shell?: string }).shell ?? "bash"}
                        lines={v.lines}
                        caption={(v as { caption?: { en: string; tr: string } }).caption ? pick((v as { caption?: { en: string; tr: string } }).caption!) : undefined}
                      />
                    );
                  }
                  if (v.kind === "editor") {
                    return (
                      <EditorMockup
                        key={i}
                        files={v.files}
                        activeFile={v.activeFile}
                        code={v.code}
                        caption={v.caption ? pick(v.caption) : undefined}
                      />
                    );
                  }
                  const toneCls =
                    v.tone === "warn"
                      ? "border-amber-700 bg-amber-900/20 text-amber-100"
                      : v.tone === "tip"
                      ? "border-emerald-700 bg-emerald-900/20 text-emerald-100"
                      : "border-cyan-700 bg-cyan-900/20 text-cyan-100";
                  return (
                    <div key={i} className={`rounded-xl border p-4 text-sm leading-relaxed ${toneCls}`}>
                      {pick(v.text)}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="rounded-xl bg-slate-800 border border-slate-700 p-4">
              <p className="text-sm text-slate-400">{t("mnemonic")}</p>
              <p className="text-white font-semibold mt-1">{pick(mod.lesson.mnemonic)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-400 mb-2">{t("pitfalls")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                {pick(mod.lesson.pitfalls).map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setStep("task")}
                className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
              >
                {t("toTask")}
              </button>
            </div>
          </div>
        )}

        {step === "task" && (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">{t("scenario")}</h3>
              <p className="text-slate-300">{pick(mod.task.scenario)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t("portalSteps")}</h3>
              <ol className="list-decimal pl-5 space-y-1 text-slate-300">
                {pick(mod.task.portalSteps).map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t("cliSteps")}</h3>
              <pre className="bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm overflow-x-auto">
                <code>{mod.task.cli.join("\n")}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">{t("checklist")}</h3>
              <ul className="space-y-1 text-slate-300">
                {pick(mod.task.checklist).map((c, i) => <li key={i}>☐ {c}</li>)}
              </ul>
            </div>
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => setStep("lesson")}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
              >
                {t("back")}
              </button>
              <button
                onClick={() => setStep("quiz")}
                className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
              >
                {t("toQuiz")}
              </button>
            </div>
          </div>
        )}

        {step === "quiz" && (
          <Quiz questions={mod.quiz} onComplete={() => setStep("flashcards")} />
        )}

        {step === "flashcards" && (
          <Flashcards cards={mod.flashcards} onFinish={finishModule} />
        )}

        {step === "done" && (
          <BadgeUnlock
            badgeEmoji={mod.badge.emoji}
            badgeName={pick(mod.badge.name)}
            completedCount={progress.completedModules.length}
            totalCount={totalModules()}
          />
        )}
      </motion.section>
    </main>
  );
}
