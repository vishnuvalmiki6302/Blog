import React from 'react';

export default function Skills() {
  return (
    <>
      {/* SKILLS */}
    <section id="skills" className="section section-tint">
        <div className="container">
            <div className="section-head">
                <div className="eyebrow">Tech Stack</div>
                <h2 className="section-h2">Skills & Tools</h2>
            </div>
            <div className="skills-board">

                {/* Languages */}
                <div className="skill-block reveal" data-delay="0">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <h3 className="sb-title">Languages</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <i className="devicon-javascript-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">JavaScript</span><span className="sm-role">Core Web
                                    Logic</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-cplusplus-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">C / C++</span><span className="sm-role">Systems &
                                    DSA</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-java-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Java </span><span className="sm-role">Enterprise
                                    Apps</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-python-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Python</span><span className="sm-role">Scripting &
                                    Data</span></div>
                        </div>
                        <div className="skill-modern">
                            <div className="sm-icon-group">
                                <i className="devicon-kotlin-plain colored sm-icon"></i>
                                <i className="devicon-php-plain colored sm-icon" style={{marginLeft: '-8px'}}></i>
                            </div>
                            <div className="sm-info"><span className="sm-name">Kotlin / PHP</span><span className="sm-role">App /
                                    API Logic</span></div>
                        </div>
                    </div>
                </div>

                {/* Frameworks */}
                <div className="skill-block reveal" data-delay="60">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <polyline points="8,21 12,17 16,21" />
                            </svg>
                        </div>
                        <h3 className="sb-title">Frameworks</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <i className="devicon-react-original colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">ReactJS</span><span className="sm-role">Interactive
                                    UIs</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-nodejs-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Node.js</span><span className="sm-role">Runtime
                                    Env</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-express-original sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Express</span><span className="sm-role">RESTful
                                    APIs</span></div>
                        </div>
                        <div className="skill-modern">
                            <div className="sm-icon-group">
                                <i className="devicon-html5-plain colored sm-icon"></i>
                                <i className="devicon-css3-plain colored sm-icon" style={{marginLeft: '-8px'}}></i>
                            </div>
                            <div className="sm-info"><span className="sm-name">HTML5 / CSS3</span><span className="sm-role">Semantic
                                    Web Layouts</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-tailwindcss-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Tailwind CSS</span><span className="sm-role">Utility
                                    Styling</span></div>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className="skill-block reveal" data-delay="120">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                            </svg>
                        </div>
                        <h3 className="sb-title">Databases</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <i className="devicon-mongodb-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">MongoDB</span><span className="sm-role">NoSQL
                                    Datastore</span></div>
                        </div>
                        <div className="skill-modern">
                            <div className="sm-icon-group">
                                <i className="devicon-postgresql-plain colored sm-icon"></i>
                                <i className="devicon-mysql-plain colored sm-icon" style={{marginLeft: '-8px'}}></i>
                            </div>
                            <div className="sm-info"><span className="sm-name">PostgreSQL / MySQL</span><span
                                    className="sm-role">Relational Schema</span></div>
                        </div>
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="skill-block reveal" data-delay="180">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                            </svg>
                        </div>
                        <h3 className="sb-title">Cloud & DevOps</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <i className="devicon-amazonwebservices-plain-wordmark colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">AWS</span><span className="sm-role">Cloud
                                    Infrastructure</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-vercel-original sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Vercel</span><span className="sm-role">Frontend
                                    Hosting</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-docker-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Docker</span><span
                                    className="sm-role">Containerization</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-linux-plain sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Linux / UNIX</span><span
                                    className="sm-role">Environment Architecture</span></div>
                        </div>
                    </div>
                </div>

                {/* Dev Tools */}
                <div className="skill-block reveal" data-delay="240">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <h3 className="sb-title">Dev Tools</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <div className="sm-icon-group">
                                <i className="devicon-git-plain colored sm-icon"></i>
                                <i className="devicon-github-original sm-icon" style={{marginLeft: '-8px'}}></i>
                            </div>
                            <div className="sm-info"><span className="sm-name">Git & GitHub</span><span className="sm-role">Version
                                    Control</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-vscode-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">VS Code</span><span className="sm-role">Primary
                                    IDE</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-postman-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Postman</span><span className="sm-role">API Testing
                                    suite</span></div>
                        </div>
                        <div className="skill-modern">
                            <i className="devicon-maven-plain colored sm-icon"></i>
                            <div className="sm-info"><span className="sm-name">Maven</span><span className="sm-role">Build
                                    Automation</span></div>
                        </div>
                    </div>
                </div>

                {/* CS Fundamentals */}
                <div className="skill-block reveal" data-delay="300">
                    <div className="sb-header">
                        <div className="sb-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3 className="sb-title">CS Fundamentals</h3>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-modern">
                            <svg className="sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                            </svg>
                            <div className="sm-info"><span className="sm-name">DSA</span><span className="sm-role">Algorithm
                                    Optimization</span></div>
                        </div>
                        <div className="skill-modern">
                            <svg className="sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 15l10-5-10-5-10 5 10 5z"></path>
                            </svg>
                            <div className="sm-info"><span className="sm-name">OOP</span><span className="sm-role">Design
                                    Patterns</span></div>
                        </div>
                        <div className="skill-modern">
                            <svg className="sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                            </svg>
                            <div className="sm-info"><span className="sm-name">SQL</span><span className="sm-role">Data
                                    Analysis</span></div>
                        </div>
                        <div className="skill-modern">
                            <svg className="sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                </path>
                            </svg>
                            <div className="sm-info"><span className="sm-name">OS & Networking</span><span
                                    className="sm-role">Architecture</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  );
}