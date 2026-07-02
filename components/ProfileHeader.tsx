export default function ProfileHeader() {
  return (
    <header id="top" className="grid grid-cols-1 gap-10 md:grid-cols-[140px_1fr] md:items-end md:gap-10">
      <div className="row-start-2 md:row-start-1">
        <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-ash)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 25%, oklch(0.92 0.04 35) 0%, transparent 55%), radial-gradient(circle at 75% 70%, oklch(0.78 0.08 35) 0%, transparent 50%)",
            }}
          />
          <div className="relative grid h-full w-full place-items-center">
            <span className="font-mono text-2xl font-medium tracking-tighter text-[var(--color-ink)]">KS</span>
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          Full-Stack Developer · IoT Engineer
        </div>
        <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tighter text-[var(--color-ink)] md:text-6xl lg:text-7xl">
          Kim Eduard
          <br />
          <span className="text-[var(--color-mute)]">Saludes</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[var(--color-mute)] md:text-lg">
          I build production-grade web systems, IoT platforms, and automation pipelines. Currently studying BSIT at Batangas State University, shipping on the side.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--color-line)] pt-6 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">Based</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">Balayan, PH</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">Age</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">21</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">Focus</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">Systems & Edge</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">Status</dt>
            <dd className="mt-1 text-sm text-[var(--color-ink)]">Open to work</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
