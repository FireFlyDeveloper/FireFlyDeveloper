const services = [
  {
    title: "Full-stack development",
    body: "Production web apps with Next.js, React, and a typed API surface.",
  },
  {
    title: "Backend architecture",
    body: "Bun, Node, FastAPI, and Django services with clean data models.",
  },
  {
    title: "IoT platforms",
    body: "ESP32 firmware, LoRa links, MQTT brokers, and live dashboards.",
  },
  {
    title: "Automation systems",
    body: "n8n workflows, scheduled jobs, and OpenAI-powered agents.",
  },
  {
    title: "Cloud infrastructure",
    body: "Docker, Kubernetes, Cloudflare, and Vercel pipelines.",
  },
  {
    title: "Real-time systems",
    body: "WebSockets, server-sent events, and live telemetry.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
          Services
        </span>
        <h2 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">
          What I can take on
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {services.map((s, i) => (
          <li
            key={s.title}
            className="group flex items-start gap-5 border-t border-[var(--color-line)] py-5"
          >
            <span className="font-mono text-xs text-[var(--color-mute)] tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-mute)]">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
