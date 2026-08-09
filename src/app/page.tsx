import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCard } from "@/components/LinkCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GithubIcon, LinkedinIcon, BlogIcon } from "@/components/icons";

const links = [
  { label: "GitHub", href: "https://github.com/", icon: <GithubIcon className="h-5 w-5" /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <LinkedinIcon className="h-5 w-5" /> },
  { label: "Blog", href: "https://example.com/", icon: <BlogIcon className="h-5 w-5" /> },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-6 py-16 sm:px-8">
      <main className="relative flex w-full max-w-sm flex-col items-center gap-10">
        <div className="absolute -top-2 right-0">
          <ThemeToggle />
        </div>

        <ProfileHeader name="김진수" bio="Samsung Electronics" avatarSrc="/avatar.jpg" />

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} icon={link.icon} />
          ))}
        </div>
      </main>
    </div>
  );
}
