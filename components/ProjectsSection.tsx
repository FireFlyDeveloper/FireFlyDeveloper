import SectionHeader from "./SectionHeader";
import ArrowOutIcon from "./ArrowOutIcon";

type Project = {
  name: string;
  description: string;
  link: string;
  stack?: string[];
};

type Group = { category: string; items: Project[] };

const projects: Group[] = [
  {
    category: "Full stack, edge to cloud",
    items: [
      {
        name: "Power Monitoring",
        description: "Real-time energy monitoring web app with AI-powered reporting. Next.js, React, Tailwind on the frontend.",
        link: "https://github.com/FireFlyDeveloper/Power-Monitoring",
        stack: ["Next.js", "React", "Tailwind"],
      },
      {
        name: "Power Monitoring Backend",
        description: "Bun and Hono backend with PostgreSQL, MQTT, WebSocket, and OpenAI integration.",
        link: "https://github.com/FireFlyDeveloper/Power-Monitoring-Backend",
        stack: ["Bun", "Hono", "PostgreSQL", "MQTT"],
      },
      {
        name: "Power Monitoring Arduino",
        description: "LoRa-based dual-device energy monitoring system with a Master-Slave architecture.",
        link: "https://github.com/FireFlyDeveloper/Power-Monitoring-Arduino",
        stack: ["ESP32", "LoRa", "C++"],
      },
    ],
  },
  {
    category: "IoT and embedded",
    items: [
      {
        name: "UPtime",
        description: "Node.js monitoring system with real-time device tracking and email alerts.",
        link: "https://github.com/FireFlyDeveloper/UPtime",
        stack: ["Node.js", "MQTT"],
      },
      {
        name: "ESP8266 Server Auto Power Controller",
        description: "Lightweight ESP8266 health monitoring and remote power control.",
        link: "https://github.com/FireFlyDeveloper/ESP8266-Server-Auto-Power-Controller",
        stack: ["ESP8266", "C++"],
      },
      {
        name: "Washing Machine, Semi-Automatic",
        description: "ESP32 controller with MQTT, vibration monitoring, and multiple wash modes.",
        link: "https://github.com/FireFlyDeveloper/Washing-Machine-Semi-Automatic",
        stack: ["ESP32", "MQTT", "C++"],
      },
      {
        name: "VA",
        description: "Linux real-time voice assistant with wake word, TTS, and speech recognition.",
        link: "https://github.com/FireFlyDeveloper/VA",
        stack: ["Python", "Linux"],
      },
    ],
  },
  {
    category: "Apps, agents, and APIs",
    items: [
      {
        name: "face-door-pi",
        description: "Raspberry Pi face recognition door lock with 3-layer liveness detection.",
        link: "https://github.com/FireFlyDeveloper/face-door-pi",
        stack: ["Raspberry Pi", "Python"],
      },
      {
        name: "face-door-app",
        description: "React and Capacitor Android app for face enrollment over Bluetooth.",
        link: "https://github.com/FireFlyDeveloper/face-door-app",
        stack: ["React", "Capacitor"],
      },
      {
        name: "Drownsiness",
        description: "Computer vision driver drowsiness detector using MediaPipe FaceLandmarker with an alarm system.",
        link: "https://github.com/FireFlyDeveloper/Drownsiness",
        stack: ["MediaPipe", "Python"],
      },
      {
        name: "VertexHermesProxy",
        description: "Google Agent Studio OpenAI proxy for the Hermes Agent runtime.",
        link: "https://github.com/FireFlyDeveloper/VertexHermesProxy",
        stack: ["TypeScript"],
      },
      {
        name: "Manga API",
        description: "Versatile API for manga titles, chapters, and detail retrieval.",
        link: "https://github.com/FireFlyDeveloper/Manga-API",
        stack: ["Node.js"],
      },
      {
        name: "TikTok API",
        description: "TikTok media API that returns clean, watermark-free results.",
        link: "https://github.com/FireFlyDeveloper/TiktokAPI",
        stack: ["Node.js"],
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="space-y-10 scroll-mt-24">
      <SectionHeader label="Selected work" title="Things I have shipped" />

      <div className="space-y-10">
        {projects.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
              {group.category}
            </h3>
            <ul className="mt-4 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {group.items.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 py-5 transition-colors hover:bg-[var(--color-ash)] sm:flex-row sm:items-start sm:gap-8 sm:px-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                          {p.name}
                        </h4>
                        <ArrowOutIcon className="h-3.5 w-3.5 text-[var(--color-mute)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                      </div>
                      <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-[var(--color-mute)]">
                        {p.description}
                      </p>
                    </div>
                    {p.stack && (
                      <div className="flex shrink-0 flex-wrap gap-1.5 sm:justify-end">
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
          </div>
        ))}
      </div>
    </section>
  );
}
