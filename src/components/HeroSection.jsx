import "./Hero.css"; 

import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

export const HeroSection = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Function to check current theme
    const checkTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light") {
        setIsLightMode(true);
      } else if (storedTheme === "dark") {
        setIsLightMode(false);
      } else {
        // No saved preference, use system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsLightMode(!prefersDark);
      }
    };

    // Check theme on mount
    checkTheme();

    // Listen for theme changes
    const handleStorageChange = () => {
      checkTheme();
    };

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!localStorage.getItem("theme")) {
        checkTheme();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Custom event listener for theme toggle
    const handleThemeToggle = () => {
      setTimeout(checkTheme, 100); // Small delay to ensure localStorage is updated
    };

    window.addEventListener("themeChanged", handleThemeToggle);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
      window.removeEventListener("themeChanged", handleThemeToggle);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
      {/* {isLightMode && <ParticlesBackground />} */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="fade-in">Hi, I'm</span>
            <span className="text-primary fade-in-delay-1"> Varchasv</span>
            <span className="text-gradient ml-2 fade-in-delay-2"> Sharma</span>
          </h1>

          <p className="hero-subtitle fade-in-delay-3">
            A passionate <span className="highlight-text">Full Stack Developer</span> who creates 
            exceptional digital experiences. I specialize in building modern, scalable web applications 
            that combine beautiful,  crisp designs with powerful functionality.
          </p>

          <div className="hero-cta fade-in-delay-5">
            <a href="#contact" className="cosmic-button primary-btn">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="#projects" className="cosmic-button secondary-btn">
              <ArrowRight size={20} />
              View My Work
            </a>
            <a 
              href="/varchasv's resume.pdf" 
              download 
              className="cosmic-button download-btn"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow">
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
};
