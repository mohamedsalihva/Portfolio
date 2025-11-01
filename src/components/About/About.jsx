import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        I’m a passionate <strong>Full Stack Developer</strong> who loves building
        modern, scalable, and user-friendly web applications using
        technologies like <strong>React</strong>, <strong>Node.js</strong>, and
        <strong> MongoDB</strong>.
      </p>

      <div className={styles.cards}>
        {/* Frontend Developer Card */}
        <div className={styles.card}>
          <div className={styles.icon}>🎨</div>
          <h3>Frontend Developer</h3>
          <p>
            I create responsive, visually appealing, and user-friendly web
            interfaces using <strong>React</strong>, <strong>JavaScript</strong>,
            <strong> HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind</strong>.
          </p>
        </div>

        {/* Backend Developer Card */}
        <div className={styles.card}>
          <div className={styles.icon}>⚙️</div>
          <h3>Backend Developer</h3>
          <p>
            I build secure, fast, and scalable backends using
            <strong> Node.js</strong>, <strong>Express</strong>, and
            <strong> MongoDB</strong>, ensuring smooth API communication and
            performance optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
