import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon, BlogIcon } from "@/components/icons";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", href: "https://github.com/", Icon: GithubIcon },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/", Icon: LinkedinIcon },
  { id: "blog", label: "Blog", href: "https://example.com/", Icon: BlogIcon },
];
