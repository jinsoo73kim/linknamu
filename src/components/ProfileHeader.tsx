import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export function ProfileHeader({ name, bio, avatarSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={avatarSrc}
        alt={`${name} 프로필 사진`}
        width={150}
        height={150}
        preload
        className="h-28 w-28 rounded-full object-cover shadow-[0_12px_28px_-8px_rgba(154,82,29,0.35)] ring-4 ring-white/80 dark:shadow-black/50 dark:ring-white/10"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {name}
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">{bio}</p>
      </div>
    </header>
  );
}
