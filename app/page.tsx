import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import SiteNav from "@/components/SiteNav";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 py-8 md:px-10 md:py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-20">
        <SiteNav />

        <div className="min-w-0 space-y-20 md:space-y-28">
          <ProfileHeader />
          <RevealOnScroll>
            <AvailabilityBadge />
          </RevealOnScroll>
          <RevealOnScroll>
            <AboutSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ServicesSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ProjectsSection />
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

          <footer className="border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-mute)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono">© 2026 Kim Eduard Saludes</span>
              <span className="font-mono">Built with Next.js, Tailwind, slot-text</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
