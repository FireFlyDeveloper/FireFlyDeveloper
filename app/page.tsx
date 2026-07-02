import SiteNav from "@/components/SiteNav";
import ProfileHeader from "@/components/ProfileHeader";
import Marquee from "@/components/Marquee";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main id="main" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 pt-2 md:px-10 md:pt-6 lg:px-14">
        <SiteNav />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-14">
        <ProfileHeader />
      </div>

      <RevealOnScroll>
        <Marquee />
      </RevealOnScroll>

      <div className="mx-auto max-w-[1320px] space-y-28 px-5 py-20 md:space-y-36 md:px-10 md:py-32 lg:px-14">
        <RevealOnScroll>
          <ProjectsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <TechStack />
        </RevealOnScroll>
        <RevealOnScroll>
          <EducationSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactSection />
        </RevealOnScroll>

        <footer className="grid grid-cols-1 gap-6 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              © 2026
            </span>
            <p className="mt-2 text-sm text-[var(--color-ink)]">Kim Eduard Saludes</p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Stack
            </span>
            <p className="mt-2 font-mono text-xs text-[var(--color-mute)]">
              Next.js · Tailwind · slot-text
            </p>
          </div>
          <div className="sm:text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute-2)]">
              Back to top
            </span>
            <a
              href="#top"
              className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              <span>↑</span>
              <span>Top</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
