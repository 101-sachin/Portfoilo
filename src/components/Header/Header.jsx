import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { usePortfolio } from "../../context/PortfolioContext";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Get In Touch" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const { socialMedia } = usePortfolio();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        window.innerWidth <= 767
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);  
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px", 
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

   
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const { id } of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={headerRef}
      className={`header-container ${menuOpen ? "header-open" : ""}`}>
      <div className="header-div">
        <div className="logo-div">
          <a className="logo" onClick={() => scrollToSection("home")}>Sachin</a>
        </div>

        <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`nav-link-item ${
                activeSection === id ? "active" : ""
              }`}
              onClick={() => scrollToSection(id)}>
              {label}
            </li>
          ))}
          <div className="mobile-social-icons">
            {socialMedia?.linkedin && (
              <a
                href={socialMedia.linkedin}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
            {socialMedia?.github && (
              <a
                href={socialMedia.github}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}
            {socialMedia?.x && (
              <a
                href={socialMedia.x}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            )}
            {socialMedia?.mail && (
              <a
                href={`mailto:${socialMedia.mail}`}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
