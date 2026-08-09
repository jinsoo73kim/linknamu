type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export function ProfileHeader({ name, bio, avatarInitial }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-3xl font-bold text-white">
        {avatarInitial}
      </div>
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{name}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
