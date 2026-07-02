"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work", n: "01" },
  { href: "#services", label: "Services", n: "02" },
  { href: "#stack", label: "Stack", n: "03" },
  { href: "#timeline", label: "Timeline", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
];

export default function SiteNav() {
  const [now, setNow] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      setNow(`${hh}:${mm}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 -mx-5 mb-12 border-b border-[var(--color-line)] bg-[var(--color-paper)]/75 px-5 backdrop-blur-md md:-mx-10 md:px-10 lg:mx-0 lg:mb-0 lg:px-0 lg:bg-transparent lg:backdrop-blur-0">
      <div className="flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--color-ink)] text-[var(--color-paper)] transition-transform duration-500 group-hover:rotate-12">
            <span className="font-mono text-[11px] font-medium">KS</span>
          </span>
          <span className="text-[var(--color-ink)]">firefly / portfolio</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-2 text-sm text-[var(--color-mute)] transition-colors duration-300 hover:text-[var(--color-ink)]"
            >
              <span className="font-mono text-[10px] tracking-wider text-[var(--color-mute-2)]">
                {l.n}
              </span>
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-ink)] transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)] md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span>Balayan, {now || "--:--"}</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`absolute h-px w-4 bg-[var(--color-ink)] transition-transform duration-500 [transition-timing-function:var(--ease-fluid)] ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-4 bg-[var(--color-ink)] transition-transform duration-500 [transition-timing-function:var(--ease-fluid)] ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-1 border-t border-[var(--color-line)] py-4">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2 text-sm text-[var(--color-mute)] transition-colors duration-300 hover:text-[var(--color-ink)]"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="font-mono text-[10px] tracking-wider text-[var(--color-mute-2)]">
                  {l.n}
                </span>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
