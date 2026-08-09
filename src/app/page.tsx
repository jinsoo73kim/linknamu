import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-6 py-16 sm:px-8">
      <main className="relative flex w-full max-w-sm flex-col items-center gap-10">
        <div className="absolute -top-2 right-0">
          <ThemeToggle />
        </div>

        <ProfileHeader name="김진수" bio="Samsung Electronics" avatarSrc="/avatar.jpg" />

        <LinkList />
      </main>
    </div>
  );
}
