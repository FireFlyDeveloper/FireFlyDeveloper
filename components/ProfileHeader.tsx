import Image from "next/image";
import ArrowUpRight from "./ArrowUpRight";

export default function ProfileHeader() {
  return (
    <header id="top" className="relative">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute-2)]">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          Available for new work
        </span>
        <span className="hidden h-3 w-px bg-[var(--color-line)] sm:block" />
        <span>Full-Stack · IoT · Edge</span>
        <span className="hidden h-3 w-px bg-[var(--color-line)] sm:block" />
        <span>Portfolio 2026 / v4</span>
      </div>

      <h1 className="mt-8 max-w-[14ch] text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-[var(--color-ink)]">
        Kim Eduard
        <br />
        <span className="text-[var(--color-mute)]">Saludes</span>
        <span className="text-[var(--color-accent)]">.</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="max-w-[40ch] text-lg leading-relaxed text-[var(--color-mute)]">
            I build production web systems, IoT platforms, and automation pipelines. Third-year BSIT at Batangas State, shipping from Balayan, PH.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-transparent hover:text-[var(--color-ink)] active:scale-[0.98]"
            >
              <span>See selected work</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-paper)]/10 transition-all duration-500 [transition-timing-function:var(--ease-fluid)] group-hover:bg-[var(--color-ink)]/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:border-[var(--color-ink)]"
            >
              <span>Get in touch</span>
            </a>
          </div>

          <div className="mt-10 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)] md:block">
            <span>Self-portrait, 2026</span>
            <span className="mx-3 inline-block h-3 w-px bg-[var(--color-line)] align-middle" />
            <span>Oil on canvas, 1:1</span>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <PortraitFrame />
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4">
        {[
          { dt: "Year", dd: "3rd, BSIT" },
          { dt: "Projects", dd: "14 shipped" },
          { dt: "Stack layers", dd: "Web · Edge · Cloud" },
          { dt: "Response time", dd: "< 24h" },
        ].map((s) => (
          <div key={s.dt}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              {s.dt}
            </dt>
            <dd className="mt-2 text-sm text-[var(--color-ink)]">{s.dd}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

function PortraitFrame() {
  return (
    <div className="relative">
      {/* Outer paper frame (the "outer shell" of the double-bezel) */}
      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-2 shadow-[0_40px_80px_-40px_oklch(0.18_0.005_240_/_0.28)]"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {/* Inner mount (the "inner core") */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-ash)] shadow-[inset_0_1px_0_oklch(1_0_0_/_0.6)]">
          <Image
            src="/portrait/hero.jpg"
            alt="Self-portrait, oil on canvas, 2026"
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
          {/* Subtle warm vignette to honor the painterly palette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 55%, oklch(0.18 0.005 240 / 0.18) 100%)",
            }}
          />
        </div>
      </div>

      {/* Floating mono tag, top-right */}
      <div className="absolute -top-3 right-4 z-10 flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink)] shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        portrait · v1
      </div>

      {/* Caption strip underneath */}
      <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
        <span>Kim Eduard Saludes</span>
        <span>Balayan, PH</span>
      </div>
    </div>
  );
}
