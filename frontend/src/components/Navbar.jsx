import React from 'react';

export default function Navbar({ isStuck, menuOpen, setMenuOpen }) {
  return (
    <>
      {/* NAV */}
      <nav id="navbar" className={isStuck ? "stuck" : ""}>
        <div className="nav-container">
          <a href="#home" className="nav-brand">
            <span className="brand-dot"></span>
            Vishnu Vardhan
          </a>

          <ul className={`nav-menu ${menuOpen ? "open" : ""}`} id="navMenu">
            <li><a href="#about" className="nav-item">About</a></li>
            <li><a href="#skills" className="nav-item">Skills</a></li>
            <li><a href="#projects" className="nav-item">Projects</a></li>
            <li><a href="#experience" className="nav-item">Experience</a></li>
            <li><a href="#education" className="nav-item">Education</a></li>
            <li><a href="#contact" className="nav-item nav-cta desktop-only">Hire Me</a></li>
          </ul>

          <div className="nav-actions-mobile">
            <a href="#contact" className="nav-cta-small mobile-hire-btn">Hire Me</a>
            <button className={`nav-toggle ${menuOpen ? "open" : ""}`} id="navToggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}