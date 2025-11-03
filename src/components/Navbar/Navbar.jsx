import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <a className="text-2xl font-bold text-white no-underline" href="#home">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Portfolio</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a className="text-gray-300 no-underline hover:text-blue-400 transition-colors duration-300 font-medium" href="#about">About</a></li>
          <li><a className="text-gray-300 no-underline hover:text-blue-400 transition-colors duration-300 font-medium" href="#projects">Projects</a></li>
          <li><a className="text-gray-300 no-underline hover:text-blue-400 transition-colors duration-300 font-medium" href="#contact">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div 
            className="text-white text-2xl cursor-pointer"
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
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseMenu}
      ></div>

      {/* Side Menu for mobile */}
      <ul
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 pt-16 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div 
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </div>
        <li className="py-4 px-6 border-b border-gray-800">
          <a 
            className="text-gray-300 no-underline text-lg hover:text-blue-400 transition-colors duration-300 font-medium" 
            href="#about" 
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            About
          </a>
        </li>
        <li className="py-4 px-6 border-b border-gray-800">
          <a 
            className="text-gray-300 no-underline text-lg hover:text-blue-400 transition-colors duration-300 font-medium" 
            href="#projects" 
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            Projects
          </a>
        </li>
        <li className="py-4 px-6">
          <a 
            className="text-gray-300 no-underline text-lg hover:text-blue-400 transition-colors duration-300 font-medium" 
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