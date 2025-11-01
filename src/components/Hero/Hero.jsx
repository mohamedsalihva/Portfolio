import React from "react";
import styles from "./Hero.module.css";
import salihImg from "../../assets/profile/salih.jpg"; // direct import

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello, I'm <span>Mohamed Salih V A</span>
        </h1>
        <p className={styles.subtitle}>
          Full-Stack Developer specializing in <strong>React</strong> & <strong>Node.js</strong>.  
          I build modern web applications with clean, efficient code. Let’s collaborate or connect!
        </p>
        <a href="mailto:your-email@example.com" className={styles.button}>
          Contact Me
        </a>
      </div>

      <div className={styles.image}>
        <img src={salihImg} alt="Mohamed Salih" />
      </div>
    </section>
  );
};

export default Hero;
