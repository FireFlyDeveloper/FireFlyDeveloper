export default function SectionHeader({
  eyebrow,
  title,
  intro,
  right,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="grid grid-cols-1 gap-6 border-b border-[var(--color-line)] pb-8 md:grid-cols-12 md:gap-8 md:pb-10">
      <div className="md:col-span-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
          {eyebrow}
        </span>
      </div>
      <div className="md:col-span-9">
        <h2 className="text-3xl font-medium leading-[1.05] tracking-tighter text-[var(--color-ink)] md:text-5xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--color-mute)]">
            {intro}
          </p>
        )}
        {right && <div className="mt-6">{right}</div>}
      </div>
    </header>
  );
}
