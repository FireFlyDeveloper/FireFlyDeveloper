import SectionHeader from "./SectionHeader";

const techCategories = [
  { category: "Languages", items: ["TypeScript", "Python", "Java", "C++", "Kotlin", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind", "React Native", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Bun", "Hono", "Django", "FastAPI", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"] },
  { category: "Cloud and DevOps", items: ["AWS", "Docker", "Kubernetes", "GCP", "Vercel", "Cloudflare"] },
  { category: "IoT and Embedded", items: ["Arduino", "ESP32", "ESP8266", "Raspberry Pi", "LoRa", "MQTT"] },
  { category: "AI and Automation", items: ["OpenAI", "Vertex AI", "n8n", "TensorFlow", "PyTorch"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="space-y-10 scroll-mt-24">
      <SectionHeader
        eyebrow="03 / Stack"
        title="Tools I reach for."
        intro="Not a wishlist. The set I have used in real production, grouped by where they sit in the stack."
      />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
        {techCategories.map((cat, i) => (
          <div
            key={cat.category}
            className="bg-[var(--color-paper)] p-6 transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-[var(--color-paper-2)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
                {cat.category}
              </h3>
              <span className="font-mono text-[10px] tabular-nums text-[var(--color-line-2)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-ink)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
