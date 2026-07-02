import SectionHeader from "./SectionHeader";

const educationHistory = [
  {
    school: "Batangas State University, Balayan Campus",
    location: "Balayan, Batangas",
    period: "2022 - Present",
    details: "Bachelor of Science in Information Technology",
    current: true,
    highlight: "Third year, second semester. Transferred in from BS Industrial Technology.",
  },
  {
    school: "Batangas State University, Balayan Campus",
    location: "Balayan, Batangas",
    period: "2021 - 2022",
    details: "Bachelor in Industrial Technology, Computer Technology",
  },
  {
    school: "Balayan Senior High School",
    location: "Balayan, Batangas",
    period: "2019 - 2021",
    details: "Senior High School, ICT strand",
    highlight: "Graduated with High Honors",
    award: true,
  },
  {
    school: "Balayan Colleges",
    location: "Balayan, Batangas",
    period: "2015 - 2019",
    details: "Junior High School",
  },
  {
    school: "Nagbunga Elementary School",
    location: "Nagbunga, Zambales",
    period: "2009 - 2015",
    details: "Elementary Education",
  },
];

export default function EducationSection() {
  return (
    <section id="timeline" className="space-y-10 scroll-mt-24">
      <SectionHeader
        eyebrow="04 / Timeline"
        title="Where I learned it."
        intro="A straight line from elementary to where I am now. The transfer between programs is the part of the story most people skip."
      />
      <ol className="relative grid grid-cols-1 gap-x-10 gap-y-8 border-l border-[var(--color-line)] pl-6 md:grid-cols-2">
        {educationHistory.map((edu) => (
          <li key={edu.school} className="relative">
            <span
              className={`absolute -left-[27px] top-2 grid h-3 w-3 place-items-center rounded-full border-2 ${
                edu.current
                  ? "border-[var(--color-accent)] bg-[var(--color-paper)]"
                  : "border-[var(--color-line-2)] bg-[var(--color-paper)]"
              }`}
            >
              {edu.current && <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />}
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h3 className="text-base font-medium text-[var(--color-ink)]">{edu.school}</h3>
                <p className="text-sm text-[var(--color-mute)]">{edu.details}</p>
                {edu.highlight && (
                  <p
                    className={`mt-2 text-sm ${edu.award ? "text-[var(--color-ink)]" : "text-[var(--color-mute)]"}`}
                  >
                    {edu.highlight}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                <span className="font-mono text-xs text-[var(--color-mute)]">{edu.period}</span>
                {edu.current && (
                  <span className="rounded-full border border-[var(--color-accent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    Current
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
