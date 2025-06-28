import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import "./Navbar.css";

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
        

        <div className="navbar__nav-items navbar__nav-items--desktop">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="navbar__link">
              {item.name}
            </a>
          ))}
        </div>

        <div className="navbar__theme-toggle">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="navbar__menu-toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="navbar__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
