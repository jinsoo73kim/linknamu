"use client";

import { useEffect, useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import { links } from "@/lib/links";

export function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          label={link.label}
          href={link.href}
          icon={<link.Icon className="h-5 w-5" />}
          count={counts[link.id] ?? 0}
          onLinkClick={() => handleLinkClick(link.id)}
        />
      ))}
    </div>
  );
}
