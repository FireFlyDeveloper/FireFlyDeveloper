export default function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
        {label}
      </span>
      <h2 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">{title}</h2>
    </div>
  );
}
