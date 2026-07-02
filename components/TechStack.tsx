const techCategories = [
  { category: "Languages", items: ["TypeScript", "Python", "Java", "C++", "Kotlin", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind", "React Native", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Bun", "Django", "FastAPI", "Express.js", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"] },
  { category: "Cloud and DevOps", items: ["AWS", "Docker", "Kubernetes", "GCP", "Vercel", "Firebase", "Cloudflare"] },
  { category: "IoT and Embedded", items: ["Arduino", "ESP32", "ESP8266", "Raspberry Pi", "LoRa", "MQTT"] },
  { category: "AI and Automation", items: ["OpenAI", "Vertex AI", "n8n", "TensorFlow", "PyTorch"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
          Stack
        </span>
        <h2 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">
          Tools I reach for
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((cat) => (
          <div key={cat.category} className="rounded-xl border border-[var(--color-line)] p-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
              {cat.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink)]"
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
