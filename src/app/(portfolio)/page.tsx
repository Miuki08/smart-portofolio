import { AboutSection } from "./_components/about/about-section";
import { ContactSection } from "./_components/contact/contact-section";
import { HeroSection } from "./_components/hero/hero-section";
import { ProjectsSection } from "./_components/projects/projects-section";
import { SiteHeader } from "./_components/site-header";
import { SkillsSection } from "./_components/skills/skills-section";

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}