import SectionHeader from "./SectionHeader";
import ArrowUpRight from "./ArrowUpRight";
import SpotlightCard from "./SpotlightCard";

type Project = {
  name: string;
  description: string;
  link: string;
  stack?: string[];
  metric?: string;
  year?: string;
};

type Group = { category: string; intro: string; items: Project[] };

const projects: Group[] = [
  {
    category: "Featured commission",
    intro: "One project, the full stack. ESP32 to LoRa to Bun to Next.js to AI reports.",
    items: [
      {
        name: "Power Monitoring",
        description:
          "Real-time energy monitoring across three repos: an ESP32 edge node with LoRa, a Bun and Hono backend on PostgreSQL with MQTT, and a Next.js dashboard with AI-powered daily reports.",
        link: "https://github.com/FireFlyDeveloper/Power-Monitoring",
        stack: ["Next.js", "Bun", "PostgreSQL", "ESP32", "LoRa", "OpenAI"],
        metric: "3 repos",
        year: "2025",
      },
    ],
  },
  {
    category: "Edge and embedded",
    intro: "Firmware, real-time telemetry, and physical devices that do not get to crash.",
    items: [
      {
        name: "UPtime",
        description:
          "Node.js monitoring system with real-time device tracking and email alerts.",
        link: "https://github.com/FireFlyDeveloper/UPtime",
        stack: ["Node.js", "MQTT"],
        year: "2024",
      },
      {
        name: "ESP8266 Server Auto Power Controller",
        description:
          "Lightweight ESP8266 health monitoring and remote power control for always-on servers.",
        link: "https://github.com/FireFlyDeveloper/ESP8266-Server-Auto-Power-Controller",
        stack: ["ESP8266", "C++"],
        year: "2024",
      },
      {
        name: "Washing Machine, Semi-Automatic",
        description:
          "ESP32 controller with MQTT telemetry, vibration monitoring, and multiple wash modes.",
        link: "https://github.com/FireFlyDeveloper/Washing-Machine-Semi-Automatic",
        stack: ["ESP32", "MQTT", "C++"],
        year: "2024",
      },
      {
        name: "VA",
        description:
          "Linux real-time voice assistant with wake word, TTS, and speech recognition.",
        link: "https://github.com/FireFlyDeveloper/VA",
        stack: ["Python", "Linux"],
        year: "2023",
      },
    ],
  },
  {
    category: "Apps, agents, and APIs",
    intro: "From a face-recognition door lock to a TikTok watermark stripper.",
    items: [
      {
        name: "face-door-pi",
        description:
          "Raspberry Pi face recognition door lock with 3-layer liveness detection.",
        link: "https://github.com/FireFlyDeveloper/face-door-pi",
        stack: ["Raspberry Pi", "Python"],
        year: "2024",
      },
      {
        name: "face-door-app",
        description:
          "React and Capacitor Android app for face enrollment over Bluetooth.",
        link: "https://github.com/FireFlyDeveloper/face-door-app",
        stack: ["React", "Capacitor"],
        year: "2024",
      },
      {
        name: "Drownsiness",
        description:
          "Computer vision driver drowsiness detector using MediaPipe FaceLandmarker with an alarm system.",
        link: "https://github.com/FireFlyDeveloper/Drownsiness",
        stack: ["MediaPipe", "Python"],
        year: "2024",
      },
      {
        name: "VertexHermesProxy",
        description:
          "Google Agent Studio OpenAI proxy for the Hermes Agent runtime.",
        link: "https://github.com/FireFlyDeveloper/VertexHermesProxy",
        stack: ["TypeScript"],
        year: "2025",
      },
      {
        name: "Manga API",
        description:
          "Versatile API for manga titles, chapters, and detail retrieval.",
        link: "https://github.com/FireFlyDeveloper/Manga-API",
        stack: ["Node.js"],
        year: "2023",
      },
      {
        name: "TikTok API",
        description:
          "TikTok media API that returns clean, watermark-free results.",
        link: "https://github.com/FireFlyDeveloper/TiktokAPI",
        stack: ["Node.js"],
        year: "2023",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="space-y-14 scroll-mt-24">
      <SectionHeader
        eyebrow="01 / Selected work"
        title="Things I have shipped."
        intro="Fourteen public repos across IoT, full-stack, and APIs. The featured one runs across three coordinated repositories."
      />

      <div className="space-y-14">
        {projects.map((group, gi) => (
          <div key={group.category}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-2 border-b border-[var(--color-line)] pb-3">
              <h3 className="text-base font-medium tracking-tight text-[var(--color-ink)] md:text-lg">
                {group.category}
              </h3>
              <p className="max-w-[40ch] text-right font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute-2)]">
                {group.intro}
              </p>
            </div>

            {gi === 0 ? (
              <FeaturedProject project={group.items[0]} />
            ) : (
              <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {group.items.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 py-5 transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-[var(--color-ash)] sm:flex-row sm:items-start sm:gap-8 sm:px-3"
                    >
                      <div className="hidden w-12 shrink-0 font-mono text-[10px] tracking-wider text-[var(--color-mute-2)] sm:block">
                        {p.year}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-medium text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                            {p.name}
                          </h4>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-mute-2)] transition-all duration-500 [transition-timing-function:var(--ease-fluid)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                        </div>
                        <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-[var(--color-mute)]">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5 sm:hidden">
                          {p.stack?.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--color-line)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-mute)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {p.stack && (
                        <div className="hidden shrink-0 flex-wrap justify-end gap-1.5 sm:flex">
                          {p.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-mute)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <SpotlightCard className="rounded-2xl">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-2)] p-6 transition-colors duration-500 [transition-timing-function:var(--ease-fluid)] hover:bg-[var(--color-paper)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Featured · {project.year}
            </span>
            <h4 className="mt-3 text-2xl font-medium tracking-tight text-[var(--color-ink)] md:text-3xl">
              {project.name}
            </h4>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-all duration-500 [transition-timing-function:var(--ease-fluid)] group-hover:rotate-45 group-hover:border-[var(--color-ink)]">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--color-mute)]">
          {project.description}
        </p>
        {project.stack && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-8 grid grid-cols-3 divide-x divide-[var(--color-line)] border-t border-[var(--color-line)] pt-6">
          <div className="pr-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Repos
            </div>
            <div className="mt-1 font-mono text-lg tabular-nums text-[var(--color-ink)]">
              {project.metric}
            </div>
          </div>
          <div className="px-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Path
            </div>
            <div className="mt-1 font-mono text-sm text-[var(--color-ink)]">Edge → Cloud</div>
          </div>
          <div className="pl-4 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Open
            </div>
            <div className="mt-1 font-mono text-sm text-[var(--color-ink)]">MIT</div>
          </div>
        </div>
      </a>
    </SpotlightCard>
  );
}
