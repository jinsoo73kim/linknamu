"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="다크모드 전환"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/30 text-stone-600 backdrop-blur-md transition-colors hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-stone-300 dark:hover:bg-white/10"
    >
      <MoonIcon className="h-4.5 w-4.5 dark:hidden" />
      <SunIcon className="hidden h-4.5 w-4.5 dark:block" />
    </button>
  );
}
