export default function Marquee() {
  const items = [
    "Next.js",
    "TypeScript",
    "Bun",
    "PostgreSQL",
    "ESP32",
    "LoRa",
    "MQTT",
    "OpenAI",
    "Docker",
    "Cloudflare",
    "Three.js",
    "React Native",
  ];
  const seq = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-paper-2)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-paper-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-paper-2)] to-transparent" />
      <div className="marquee-pause flex">
        <ul className="marquee shrink-0 items-center gap-12 py-5 pr-12 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
          {seq.map((s, i) => (
            <li key={`${s}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
