import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills/index";



export default  function Home() {
  
  return (
    <div suppressHydrationWarning >
      <HeroSection  />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <ContactSection />
    </div>
  )
};