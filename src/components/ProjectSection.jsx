import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import "./ProjectSection.css";

// Enhanced projects data - only 3 projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "Screenshot 2025-07-20 170607.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    demoUrl: "https://odoo-mocha.vercel.app/",
    githubUrl: "https://github.com/PeushYadav/odoo",
    featured: true,
  },
  {
    id: 2,
    title: "unnati3.0",
    description: "A website for an entrepreneurship event that attracted 10,000 people !.",
    image: "Screenshot 2025-07-20 171054.png",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    category: "frontend",
    demoUrl: "https://unnati4o.netlify.app/",
    githubUrl: "https://github.com/Varchasv-pixel/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    category: "frontend",
    demoUrl: "https://weather-dashboard.com",
    githubUrl: "https://github.com/Varchasv-pixel/weather-app",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Featured <span className="highlight">Projects</span>
        </h2>

        <p className="projects-subtitle">
          more projects to be added soon.....
        </p>

        {/* Filter Buttons */}
        <div className="projects-filter">
          <div className="filter-icon">
            <Filter size={20} />
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`filter-button ${
                  activeCategory === category.id ? "active" : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                <div className="project-overlay">
                  <div className="project-actions">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-action-btn demo-btn"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-action-btn github-btn"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this category.</p>
          </div>
        )}

        <div className="projects-footer">
          <a
            className="projects-button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Varchasv-pixel"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
