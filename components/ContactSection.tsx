"use client";

import { useState } from "react";
import { SlotText } from "slot-text/react";

import SectionHeader from "./SectionHeader";
import ArrowUpRight from "./ArrowUpRight";
import RevealOnScroll from "./RevealOnScroll";

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

type SlotTextHandle = { set: (t: string) => void; flash: (t: string) => void } | null;

export default function ContactSection() {
  const [, setHandle] = useState<SlotTextHandle>(null);

  const copyEmail = async () => {
    const email = "kim@fireflydev.dev";
    const node = document.getElementById("copy-email-slot");
    const ctrl = node as unknown as SlotTextHandle;
    try {
      await navigator.clipboard.writeText(email);
      ctrl?.flash("Copied");
    } catch {
      ctrl?.set("Press Ctrl+C");
    }
  };

  return (
    <section id="contact" className="space-y-12 scroll-mt-24">
      <SectionHeader
        eyebrow="05 / Contact"
        title="Let us build something useful."
        intro="The fastest path is email. I read everything, usually within a day. Freelance and full-time roles, remote or on-site in Batangas."
      />

      <RevealOnScroll>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-12">
          <div className="bg-[var(--color-paper)] p-7 md:col-span-7 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Direct email
            </span>
            <a
              href="mailto:kim@fireflydev.dev"
              className="mt-4 block break-all text-2xl font-medium leading-tight tracking-tight text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-accent)] md:text-4xl"
            >
              kim@fireflydev.dev
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:kim@fireflydev.dev"
                className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-transparent hover:text-[var(--color-ink)] active:scale-[0.98]"
              >
                <span>Open mail client</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-paper)]/10 transition-all duration-500 [transition-timing-function:var(--ease-fluid)] group-hover:bg-[var(--color-ink)]/10 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email to clipboard"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:border-[var(--color-ink)] active:scale-[0.98]"
              >
                <span aria-live="polite" className="inline-block min-w-[5.5rem] text-left font-mono">
                  <SlotText
                    text="Copy email"
                    ref={(instance: unknown) =>
                      setHandle(instance as SlotTextHandle)
                    }
                  />
                </span>
                <span className="font-mono text-[var(--color-mute-2)]" id="copy-email-slot" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[var(--color-paper-2)] p-7 md:col-span-5 md:p-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
                Based
              </span>
              <p className="mt-3 text-lg text-[var(--color-ink)]">Balayan, Batangas, PH</p>
              <p className="mt-1 text-sm text-[var(--color-mute)]">Open to remote and on-site work</p>
            </div>
            <div className="mt-8 border-t border-[var(--color-line)] pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
                Currently
              </span>
              <p className="mt-2 text-sm text-[var(--color-ink)]">BSIT 3rd year, 2nd semester</p>
              <p className="mt-1 text-sm text-[var(--color-mute)]">Batangas State University</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {socialLinks.map((link, i) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-[var(--color-ash)] sm:px-3"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tabular-nums text-[var(--color-mute-2)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">{link.name}</p>
                  <p className="font-mono text-xs text-[var(--color-mute)]">{link.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[var(--color-mute-2)] transition-all duration-500 [transition-timing-function:var(--ease-fluid)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
