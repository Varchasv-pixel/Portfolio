
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // Make sure the path is correct
import "./Navbar.css"; // Your CSS file

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a className="navbar__logo" href="#hero">
          <span className="navbar__logo-text">MY Portfolio</span>
        </a>

        <div className="navbar__nav-items navbar__nav-items--desktop">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="navbar__link">
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle inside navbar */}
        <div className="navbar__theme-toggle">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="navbar__menu-toggle"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar__mobile-links">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="navbar__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
