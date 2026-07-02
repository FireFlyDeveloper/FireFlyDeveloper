"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  const [now, setNow] = useState<string>("");

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
    <aside className="lg:sticky lg:top-10 lg:h-fit">
      <div className="flex flex-col gap-8">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--color-ink)] text-[var(--color-paper)] transition-transform group-hover:rotate-12">
            <span className="font-mono text-xs font-medium">KS</span>
          </span>
          <span className="text-[var(--color-ink)]">firefly/portfolio</span>
        </a>

        <nav className="flex gap-5 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-2 whitespace-nowrap text-sm text-[var(--color-mute)] transition-colors hover:text-[var(--color-ink)]"
            >
              <span className="hidden h-px w-5 bg-[var(--color-line)] transition-colors group-hover:bg-[var(--color-ink)] lg:block" />
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)] lg:block">
          <div>Local time</div>
          <div className="mt-1 text-[var(--color-ink)]">{now || "--:--"}</div>
        </div>
      </div>
    </aside>
  );
}
