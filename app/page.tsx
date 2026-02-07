import ProfileHeader from '@/components/ProfileHeader'
import AboutSection from '@/components/AboutSection'
import TechStack from '@/components/TechStack'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'
import AvailabilityBadge from '@/components/AvailabilityBadge'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <ProfileHeader />
            <ContactSection />
            <EducationSection />
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <AvailabilityBadge />
            <AboutSection />
            <ServicesSection />
            <TechStack />
          </div>
        </div>
      </div>
    </main>
  )
}