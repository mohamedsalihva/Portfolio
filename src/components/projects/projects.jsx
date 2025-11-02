import React from "react";
import styles from "./project.module.css";
import projectsData from "../../data/project.json";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.cardImage}
            />

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.techList}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <Github size={16} /> Code
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
