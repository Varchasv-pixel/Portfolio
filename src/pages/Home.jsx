
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";



export const  Home=() =>{


    return <div className="min-h-screen bg-backfround text-foreground overflow-x-hidden">


<Navbar />


<StarBackground />


 <main>
        <HeroSection />
         <AboutSection />
          <ContactSection />
          <SkillsSection />
           <ProjectsSection />
           
       
      </main>


       <Footer />

  










    </div>
}