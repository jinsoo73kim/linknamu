import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function LinkCard({ label, href, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3.5 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-zinc-500 dark:text-zinc-400">
        {icon}
      </span>
      <span className="flex-1 text-center">{label}</span>
    </a>
  );
}
