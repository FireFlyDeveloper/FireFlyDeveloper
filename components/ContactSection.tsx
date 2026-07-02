"use client";

import { useRef } from "react";
import { SlotText } from "slot-text/react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@FireFlyDeveloper",
    url: "https://github.com/FireFlyDeveloper",
  },
  {
    name: "Facebook",
    handle: "Kim Eduard Saludes",
    url: "https://www.facebook.com/profile.php?id=61563082877208",
  },
  {
    name: "Ko-fi",
    handle: "ko-fi.com/fireflydeveloper",
    url: "https://ko-fi.com/fireflydeveloper",
  },
];

export default function ContactSection() {
  const flashRef = useRef<{ set: (text: string) => void; flash: (text: string) => void } | null>(null);

  const copyEmail = async () => {
    const email = "kim@fireflydev.dev";
    try {
      await navigator.clipboard.writeText(email);
      flashRef.current?.flash("Copied");
    } catch {
      flashRef.current?.set("Press ⌘C");
    }
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
          Contact
        </span>
        <h2 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">
          Let us build something
        </h2>
      </div>

      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-ash)] p-6 sm:p-8">
        <p className="max-w-[55ch] text-base leading-relaxed text-[var(--color-mute)]">
          The fastest way to reach me is email. I read everything, usually within a day.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:kim@fireflydev.dev"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-transparent hover:text-[var(--color-ink)]"
          >
            <span className="font-mono">kim@fireflydev.dev</span>
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email to clipboard"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
          >
            <span
              aria-live="polite"
              className="inline-block min-w-[4.5rem] text-left font-mono"
            >
              <SlotText
                ref={(instance: unknown) => {
                  flashRef.current = instance as { set: (t: string) => void; flash: (t: string) => void } | null;
                }}
                text="Copy email"
              />
            </span>
          </button>
        </div>
      </div>

      <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 transition-colors hover:bg-[var(--color-ash)] sm:px-3"
            >
              <div>
                <p className="text-sm font-medium text-[var(--color-ink)]">{link.name}</p>
                <p className="font-mono text-xs text-[var(--color-mute)]">{link.handle}</p>
              </div>
              <svg
                className="h-4 w-4 text-[var(--color-mute)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
