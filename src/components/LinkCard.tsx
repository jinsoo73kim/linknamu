import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
  count: number;
  onLinkClick?: () => void;
};

export function LinkCard({ label, href, icon, count, onLinkClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onLinkClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-sm font-medium text-stone-700 shadow-[0_4px_16px_-4px_rgba(154,82,29,0.12)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_20px_-6px_rgba(154,82,29,0.18)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:shadow-black/20 dark:hover:bg-white/10"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-stone-500 dark:text-stone-300">
        {icon}
      </span>
      <span className="flex-1 text-center">{label}</span>
      <span className="shrink-0 text-xs text-stone-400 dark:text-stone-500">{count}회</span>
    </a>
  );
}
