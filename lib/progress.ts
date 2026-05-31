// lib/progress.ts
// Kullanıcının ilerlemesi, streak ve rozetlerini localStorage'da tutar.
// Backend yok — saf client-side.

const KEY = "dp700-progress-v1";

export type Progress = {
  completedModules: string[];   // slug listesi
  badges: string[];             // badge id listesi
  xp: number;
  lastActiveDate: string;       // YYYY-MM-DD
  streak: number;
};

const DEFAULT: Progress = {
  completedModules: [],
  badges: [],
  xp: 0,
  lastActiveDate: "",
  streak: 0,
};

export function loadProgress(): Progress {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    return { ...DEFAULT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT;
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function resetProgress(): Progress {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(DEFAULT));
    window.dispatchEvent(new CustomEvent("dp700:progress-reset"));
  }
  return { ...DEFAULT };
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function touchStreak(p: Progress): Progress {
  const today = todayStr();
  if (p.lastActiveDate === today) return p;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const y = yesterday.toISOString().slice(0, 10);

  const streak = p.lastActiveDate === y ? p.streak + 1 : 1;
  return { ...p, lastActiveDate: today, streak };
}

export function completeModule(
  p: Progress,
  slug: string,
  badgeId: string,
  xpReward = 100
): Progress {
  if (p.completedModules.includes(slug)) return p;
  const next: Progress = {
    ...p,
    completedModules: [...p.completedModules, slug],
    badges: p.badges.includes(badgeId) ? p.badges : [...p.badges, badgeId],
    xp: p.xp + xpReward,
  };
  return touchStreak(next);
}

export function isUnlocked(
  moduleOrder: number,
  completed: string[],
  allModulesInOrder: { slug: string; order: number }[]
): boolean {
  if (moduleOrder === 1) return true;
  const prev = allModulesInOrder.find((m) => m.order === moduleOrder - 1);
  if (!prev) return false;
  return completed.includes(prev.slug);
}
