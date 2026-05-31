// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { modules, totalModules } from "@/data/modules";
import { loadProgress, isUnlocked, type Progress } from "@/lib/progress";
import { useLang } from "@/lib/i18n";
import ProgressBar from "@/components/ProgressBar";
import ModuleCard from "@/components/ModuleCard";
import LangSwitch from "@/components/LangSwitch";
import ResetButton from "@/components/ResetButton";

export default function Home() {
  const { t, pick } = useLang();
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) return <div className="text-slate-400">{t("loading")}</div>;

  const completed = progress.completedModules.length;
  const total = totalModules();
  const orderList = modules.map((m) => ({ slug: m.slug, order: m.order }));

  return (
    <main className="space-y-8">
      <header className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-white">{t("appTitle")} 🧭</h1>
          <p className="text-slate-400 text-sm mt-1">{t("appTagline")}</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <LangSwitch />
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm">
            🔥 {t("streak")}: <span className="font-bold text-amber-400">{progress.streak}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm">
            ⭐ {t("xp")}: <span className="font-bold text-cyan-400">{progress.xp}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm">
            🏅 {t("badges")}: <span className="font-bold text-emerald-400">{progress.badges.length}</span>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex-1">
            <ProgressBar value={completed} total={total} />
          </div>
          <ResetButton />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">📦 {t("modulesHeader")}</h2>
        {(() => {
          const groups: { key: string; label: string | null; items: typeof modules }[] = [];
          for (const m of modules) {
            const label = m.track ? pick(m.track) : null;
            const key = label ?? "__ungrouped__";
            const last = groups[groups.length - 1];
            if (last && last.key === key) last.items.push(m);
            else groups.push({ key, label, items: [m] });
          }
          return (
            <div className="space-y-8">
              {groups.map((g, gi) => (
                <div key={gi} className="space-y-4">
                  {g.label && (
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-400 border-l-2 border-cyan-500 pl-3">
                      {g.label}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {g.items.map((m) => (
                      <ModuleCard
                        key={m.slug}
                        module={m}
                        locked={!isUnlocked(m.order, progress.completedModules, orderList)}
                        completed={progress.completedModules.includes(m.slug)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </section>
    </main>
  );
}
