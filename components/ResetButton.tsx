// components/ResetButton.tsx
// Triggers a confirm dialog then wipes localStorage progress and reloads.
"use client";

import { resetProgress } from "@/lib/progress";
import { useLang } from "@/lib/i18n";

export default function ResetButton() {
  const { t } = useLang();

  function handleReset() {
    if (typeof window === "undefined") return;
    if (!window.confirm(t("resetConfirm"))) return;
    resetProgress();
    window.location.reload();
  }

  return (
    <button
      onClick={handleReset}
      title={t("reset")}
      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:bg-rose-900/40 hover:border-rose-700 hover:text-rose-200 transition-colors"
    >
      ↺ {t("reset")}
    </button>
  );
}
