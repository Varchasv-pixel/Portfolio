import "./Hero.css"; 


export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="fade-in"> Hi, I'm</span>
            <span className="text-primary fade-in-delay-1"> Varchasv</span>
            <span className="text-gradient ml-2 fade-in-delay-2"> Sharma</span>
          </h1>

          <p className="hero-subtitle fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="hero-cta fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text"> Scroll </span>
        <svg className="arrow-down-icon" /* your ArrowDown icon here */></svg>
      </div>
    </section>
  );
};
