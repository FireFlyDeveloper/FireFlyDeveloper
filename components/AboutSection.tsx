const aboutPoints = [
  {
    n: "01",
    title: "Full-stack development",
    body: "Type-safe React and Next.js frontends, Node and Bun backends, and PostgreSQL data layers that hold up under real load.",
  },
  {
    n: "02",
    title: "Edge and embedded",
    body: "ESP32 and ESP8266 firmware, LoRa point-to-point links, MQTT pipelines, and Raspberry Pi deployments running in production.",
  },
  {
    n: "03",
    title: "Automation and agents",
    body: "Workflow engines, OpenAI-powered agents, and Hermes-style orchestration that turn repeated work into reliable systems.",
  },
  {
    n: "04",
    title: "Infrastructure that ships",
    body: "Docker, Kubernetes, Cloudflare, and Vercel configured to keep latency low and rollbacks boring.",
  },
];

export default function AboutSection() {
  return (
    <section className="space-y-8">
      <SectionHeader label="About" title="What I actually do" />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
        {aboutPoints.map((p) => (
          <article
            key={p.n}
            className="bg-[var(--color-paper)] p-6 transition-colors hover:bg-[var(--color-ash)]"
          >
            <div className="font-mono text-xs text-[var(--color-mute)]">{p.n}</div>
            <h3 className="mt-3 text-lg font-medium tracking-tight text-[var(--color-ink)]">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-mute)]">{p.body}</p>
          </article>
        ))}
      </div>
      <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--color-mute)]">
        Off the keyboard: lifting, reading novels, watching anime. The balance keeps the work honest.
      </p>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
        {label}
      </span>
      <h2 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">{title}</h2>
    </div>
  );
}
