import React from 'react';

export default function Hero({ typedText }) {
  return (
    <>
      <section id="home" className="hero">
        {/* Background layers - Reverted to the original CSS-only background you liked */}
        <div className="hero-bg-overlay"></div>
        <div className="hero-classic-stars"></div>
        <div className="hero-light-beam"></div>
        <div className="hero-grain"></div>
        <div className="hero-glow-left"></div>
        <div className="hero-glow-right"></div>

        <div className="hero-photo-wrap">
          <img src="/Assets/Vishnu.png" alt="Vishnu Vardhan" className="hero-photo" />
        </div>

        {/* Giant split name behind/around the photo */}
        <div className="hero-split-name" aria-hidden="true">
          <div className="split-left">
            <span className="split-first">VISHNU</span>
            <span className="split-role-left">FULL STACK</span>
          </div>
          <div className="split-right">
            <span className="split-last">VARDHAN</span>
            <span className="split-role-right">DEVOPS</span>
          </div>
        </div>

        {/* Bottom-left info panel */}
        <div className="hero-info">
          <div className="hero-chip">
            <span className="chip-pulse"></span>
            Available for hire
          </div>

          <p className="hero-bio">
            I build scalable full-stack products &amp; automate cloud infrastructure —<br />
            CI/CD pipelines, containerized deployments &amp; polished interfaces.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-solid">View Work &rarr;</a>
            <a href="vishnucv_91.pdf" download="vishnucv_91.pdf" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ marginRight: '6px', marginBottom: '1px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </div>

          <div className="hero-meta">
            <a href="mailto:varh6302@gmail.com" className="meta-link">varh6302@gmail.com</a>
            <span className="meta-sep">·</span>
            <a href="https://github.com/vishnuvalmiki6302" target="_blank" rel="noopener"
              className="meta-link">GitHub</a>
            <span className="meta-sep">·</span>
            <a href="https://linkedin.com/in/vishnu0317" target="_blank" rel="noopener"
              className="meta-link">LinkedIn</a>
          </div>
        </div>

        {/* Typewriter role top-right */}
        <div className="hero-role-badge">
          <span id="typed">{typedText}</span><span className="cursor-bar">|</span>
        </div>

        {/* Skills ticker at the very bottom */}
        <div className="hero-ticker" aria-label="Tech skills">
          <div className="ticker-track">
            <span>ReactJS</span><span className="ticker-dot">✦</span>
            <span>Node.js</span><span className="ticker-dot">✦</span>
            <span>Docker</span><span className="ticker-dot">✦</span>
            <span>Kubernetes</span><span className="ticker-dot">✦</span>
            <span>AWS</span><span className="ticker-dot">✦</span>
            <span>Terraform</span><span className="ticker-dot">✦</span>
            <span>Jenkins</span><span className="ticker-dot">✦</span>
            <span>MongoDB</span><span className="ticker-dot">✦</span>
            <span>CI/CD</span><span className="ticker-dot">✦</span>
            <span>PostgreSQL</span><span className="ticker-dot">✦</span>
            <span>Nginx</span><span className="ticker-dot">✦</span>
            <span>Git</span><span className="ticker-dot">✦</span>
            {/* duplicate for seamless loop */}
            <span>ReactJS</span><span className="ticker-dot">✦</span>
            <span>Node.js</span><span className="ticker-dot">✦</span>
            <span>Docker</span><span className="ticker-dot">✦</span>
            <span>Kubernetes</span><span className="ticker-dot">✦</span>
            <span>AWS</span><span className="ticker-dot">✦</span>
            <span>Terraform</span><span className="ticker-dot">✦</span>
            <span>Jenkins</span><span className="ticker-dot">✦</span>
            <span>MongoDB</span><span className="ticker-dot">✦</span>
            <span>CI/CD</span><span className="ticker-dot">✦</span>
            <span>PostgreSQL</span><span className="ticker-dot">✦</span>
            <span>Nginx</span><span className="ticker-dot">✦</span>
            <span>Git</span><span className="ticker-dot">✦</span>
          </div>
        </div>
      </section>
    </>
  );
}