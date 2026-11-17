import React from "react";
import Section from "@/components/ui/Section";
import MotionSection from "@/components/ui/MotionSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ResearchInterests from "@/components/sections/ResearchInterests";
import News from "@/components/sections/News";
import FeaturedPublications from "@/components/sections/FeaturedPublications";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero / Introduction */}
      <Section width="wide" className="pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40">
        <MotionSection yOffset={8}>
          <Hero />
        </MotionSection>
      </Section>

      {/* 2. About Me */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <About />
        </MotionSection>
      </Section>

      {/* 3. Research Interests */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <ResearchInterests />
        </MotionSection>
      </Section>

      {/* 4. News / Updates */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <News />
        </MotionSection>
      </Section>

      {/* 5. Selected Publications */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <FeaturedPublications />
        </MotionSection>
      </Section>

      {/* 6. Selected Research & Software Projects */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <FeaturedProjects />
        </MotionSection>
      </Section>

      {/* 7. Education */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <Education />
        </MotionSection>
      </Section>

      {/* 8. Technical Skills */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <Skills />
        </MotionSection>
      </Section>

      {/* 9 & 10. Contact & Academic Profiles */}
      <Section width="wide" className="pt-10 pb-16">
        <MotionSection>
          <Contact />
        </MotionSection>
      </Section>
    </>
  );
}
