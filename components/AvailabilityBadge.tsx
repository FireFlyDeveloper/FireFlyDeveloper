export default function AvailabilityBadge() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ash)] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        </span>
        <div>
          <p className="font-medium text-[var(--color-ink)]">Open for opportunities</p>
          <p className="text-sm text-[var(--color-mute)]">Freelance and full-time roles, remote or on-site in Batangas.</p>
        </div>
      </div>
      <a
        href="#contact"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-transparent hover:text-[var(--color-ink)]"
      >
        Get in touch
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
