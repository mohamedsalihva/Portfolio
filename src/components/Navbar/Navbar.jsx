import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Close menu when pressing Escape key
    const handleEscape = (event) => {
      if (event.keyCode === 27 && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <a className={styles.title} href="/">Portfolio</a>
        
        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className={styles.menu}>
          <div 
            className={styles.menuBtn} 
            onClick={handleMenuClick}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      <div 
        className={`${styles.menuOverlay} ${menuOpen ? styles.active : ''}`}
        onClick={handleCloseMenu}
      ></div>

      {/* Side Menu for mobile */}
      <ul
        className={`${styles.menuList} ${
          menuOpen ? styles.menuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div 
          className={styles.closeBtn}
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </div>
        <li>
          <a 
            href="#about" 
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;