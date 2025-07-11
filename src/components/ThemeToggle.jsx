import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // On mount, check saved theme or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // No saved preference, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
      
      // Dispatch custom event for other components to listen to
      window.dispatchEvent(new CustomEvent("themeChanged"));
      
      setIsAnimating(false);
    }, 150);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`theme-toggle-btn ${isAnimating ? 'animating' : ''}`}
      disabled={isAnimating}
    >
      <div className="icon-container">
        {isDarkMode ? (
          <Sun 
            size={24} 
            className={`sun-icon ${isAnimating ? 'rotate' : ''}`}
            color="#facc15" 
          />
        ) : (
          <Moon 
            size={24} 
            className={`moon-icon ${isAnimating ? 'rotate' : ''}`}
            color="#3b82f6" 
          />
        )}
      </div>
    </button>
  );
};