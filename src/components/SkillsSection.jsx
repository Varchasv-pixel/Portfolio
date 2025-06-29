import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import "./SkillsSection.css";

// Updated skills with icons
const skills = [
  { name: "HTML/CSS", icon: <FaHtml5 />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "React", icon: <FaReact />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
];

const categories = ["frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`skills-button ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card-vertical">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
