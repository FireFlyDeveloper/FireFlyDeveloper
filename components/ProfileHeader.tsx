import ArrowUpRight from "./ArrowUpRight";

export default function ProfileHeader() {
  return (
    <header id="top" className="relative">
      {/* Mono meta strip */}
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
        <span>Portfolio 2026 / v3</span>
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
        </div>

        {/* Right column: layered "double-bezel" image stack (SVG-generated to avoid external images) */}
        <div className="relative md:col-span-7">
          <LayeredStack />
        </div>
      </div>

      {/* Stats strip */}
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

function LayeredStack() {
  return (
    <div className="relative h-[360px] w-full sm:h-[420px]">
      {/* Back card: device frame */}
      <div
        className="absolute right-0 top-0 h-[78%] w-[68%] -rotate-[3deg] rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-2)] p-1.5 shadow-[0_30px_60px_-30px_oklch(0.18_0.005_240_/_0.18)]"
        style={{ transition: "transform 700ms var(--ease-fluid)" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[inset_0_1px_0_oklch(1_0_0_/_0.6)]">
          <DashboardMock />
        </div>
      </div>

      {/* Middle card: PCB / IoT silhouette */}
      <div
        className="absolute bottom-0 left-0 h-[58%] w-[55%] rotate-[2deg] rounded-2xl border border-[var(--color-line)] bg-[var(--color-ink)] p-1.5 shadow-[0_30px_60px_-30px_oklch(0.18_0.005_240_/_0.28)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <CircuitMock />
        </div>
      </div>

      {/* Floating mono tag */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[var(--color-paper)]/20 bg-[var(--color-paper)]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        live · 14 projects
      </div>

      {/* Caption underneath */}
      <div className="absolute -bottom-2 left-0 right-0 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
        <span>Power Monitoring · live</span>
        <span>LoRa edge</span>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Energy monitoring dashboard preview"
    >
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.985 0.003 80)" />
          <stop offset="100%" stopColor="oklch(0.94 0.004 80)" />
        </linearGradient>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.62 0.18 35)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.62 0.18 35)" />
          <stop offset="100%" stopColor="oklch(0.62 0.18 35)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-grad)" />
      <text x="20" y="30" fontFamily="ui-monospace, monospace" fontSize="9" fill="oklch(0.52 0.008 240)" letterSpacing="2">
        POWER · LIVE
      </text>
      <text x="20" y="62" fontFamily="var(--font-sans, sans-serif)" fontSize="28" fontWeight="500" fill="oklch(0.18 0.005 240)">
        1.42 kW
      </text>
      <text x="20" y="80" fontFamily="ui-monospace, monospace" fontSize="9" fill="oklch(0.52 0.008 240)">
        +4.2% vs yesterday
      </text>
      <path
        d="M 20 200 L 50 180 L 80 188 L 110 160 L 140 168 L 170 140 L 200 148 L 230 120 L 260 132 L 290 110 L 320 118 L 350 96 L 380 104"
        fill="none"
        stroke="url(#spark)"
        strokeWidth="1.5"
      />
      <line x1="20" y1="200" x2="380" y2="200" stroke="oklch(0.88 0.005 80)" strokeWidth="0.5" strokeDasharray="2 4" />
      <text x="20" y="250" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(0.52 0.008 240)">
        06:00
      </text>
      <text x="200" y="250" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(0.52 0.008 240)" textAnchor="middle">
        12:00
      </text>
      <text x="380" y="250" fontFamily="ui-monospace, monospace" fontSize="8" fill="oklch(0.52 0.008 240)" textAnchor="end">
        18:00
      </text>
    </svg>
  );
}

function CircuitMock() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="IoT circuit board preview"
    >
      <defs>
        <radialGradient id="pcb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.32 0.05 240)" />
          <stop offset="100%" stopColor="oklch(0.13 0.003 240)" />
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#pcb-glow)" />
      {/* Traces */}
      <g stroke="oklch(0.62 0.18 35 / 0.55)" strokeWidth="1" fill="none">
        <path d="M 30 60 L 120 60 L 120 100 L 220 100" />
        <path d="M 30 140 L 80 140 L 80 200 L 200 200 L 200 240 L 370 240" />
        <path d="M 370 40 L 290 40 L 290 120 L 220 120" />
        <path d="M 60 200 L 60 260 L 160 260" />
      </g>
      {/* Pads */}
      <g fill="oklch(0.72 0.16 35)">
        <circle cx="120" cy="60" r="2" />
        <circle cx="220" cy="100" r="2" />
        <circle cx="80" cy="140" r="2" />
        <circle cx="200" cy="200" r="2" />
        <circle cx="290" cy="40" r="2" />
        <circle cx="220" cy="120" r="2" />
        <circle cx="60" cy="200" r="2" />
      </g>
      {/* Chip */}
      <rect x="140" y="130" width="80" height="50" rx="4" fill="oklch(0.18 0.005 240)" stroke="oklch(0.4 0.01 240)" />
      <text x="180" y="160" fontFamily="ui-monospace, monospace" fontSize="9" fill="oklch(0.92 0.004 80)" textAnchor="middle">
        ESP32
      </text>
      {/* Antenna */}
      <path d="M 280 200 L 280 230 L 300 230" stroke="oklch(0.72 0.16 35)" strokeWidth="1" fill="none" />
      <text x="20" y="30" fontFamily="ui-monospace, monospace" fontSize="9" fill="oklch(0.66 0.006 240)" letterSpacing="2">
        EDGE NODE · LoRa
      </text>
    </svg>
  );
}
