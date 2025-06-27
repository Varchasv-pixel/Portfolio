import { useState } from "react";
import "./SkillsSection.css"; // Import your CSS file

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
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
          {categories.map((category, key) => (
            <button
              key={key}
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
          {filteredSkills.map((skill, key) => (
            <div key={key} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
              </div>
              <div className="skill-bar-background">
                <div
                  className="skill-bar-fill"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="skill-percentage">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
