import { ArrowUp, Linkedin, Instagram, Github } from "lucide-react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      

      <div className="social-links centered">
        <a
          href="https://www.linkedin.com/in/varchasv-sharma-6a7b4731b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Varchasv-pixel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.instagram.com/YOUR_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>

      <a href="#hero" className="scroll-up-btn" aria-label="Scroll to top">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
