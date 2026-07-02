const capabilities = [
  {
    n: "01",
    title: "Full-stack development",
    body: "Type-safe React and Next.js frontends, Bun and Node backends, and PostgreSQL data layers that hold up under real load.",
    chips: ["Next.js", "Bun", "PostgreSQL"],
  },
  {
    n: "02",
    title: "Edge and embedded",
    body: "ESP32 and ESP8266 firmware, LoRa point-to-point links, MQTT pipelines, and Raspberry Pi nodes running in production.",
    chips: ["ESP32", "LoRa", "MQTT"],
  },
  {
    n: "03",
    title: "Automation and agents",
    body: "Workflow engines, OpenAI-powered agents, and Hermes-style orchestration that turn repeated work into reliable systems.",
    chips: ["OpenAI", "n8n", "Agents"],
  },
  {
    n: "04",
    title: "Infrastructure that ships",
    body: "Docker, Kubernetes, Cloudflare, and Vercel configured to keep latency low and rollbacks boring.",
    chips: ["Docker", "K8s", "Cloudflare"],
  },
];

export default function AboutSection() {
  return (
    <section id="services" className="space-y-12 scroll-mt-24">
      <SectionHeader
        eyebrow="02 / Capabilities"
        title="What I actually build."
        intro="A working list, not a roadmap. The four areas I have shipped in most often, in the order I reach for them."
      />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
        {capabilities.map((c) => (
          <article
            key={c.n}
            className="group relative bg-[var(--color-paper)] p-7 transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-[var(--color-paper-2)] md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-wider text-[var(--color-mute-2)]">
                {c.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
                Capability
              </span>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-[var(--color-ink)] md:text-2xl">
              {c.title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[var(--color-mute)]">
              {c.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {c.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-mute)]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <span className="pointer-events-none absolute right-6 top-7 font-mono text-xs text-[var(--color-line-2)] transition-colors duration-500 group-hover:text-[var(--color-accent)]">
              {c.n}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

import SectionHeader from "./SectionHeader";
