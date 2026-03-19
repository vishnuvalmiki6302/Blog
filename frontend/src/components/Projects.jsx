import React from 'react';

export default function Projects() {
  return (
    <>
      {/* PROJECTS */}
    <section id="projects" className="section">
        <div className="container">
            <div className="section-head">
                <div className="eyebrow">Portfolio</div>
                <h2 className="section-h2">Featured Projects</h2>
            </div>

            <div className="project-list">

                {/* P1 */}
                <article className="project-item reveal" data-delay="0">
                    <div className="pi-visual">
                        <div className="pi-image-wrap">
                            <img src="/Assets/Projects/Kmc.png" alt="Kisan Mithar Interface Preview" />
                        </div>
                    </div>
                    <div className="pi-content">
                        <div className="pi-meta">
                            <span className="pi-num">01</span>
                            <span className="pi-date">Nov 2025 – Present</span>
                        </div>
                        <div className="pi-head">
                            <div>
                                <h3 className="pi-title">Kisan Mithar</h3>
                                <p className="pi-sub">Smart Agriculture & Farmer Advisory Platform</p>
                            </div>
                            <div className="pi-links">
                                <a href="https://github.com/vishnuvalmiki6302/KMC" className="pi-link" aria-label="GitHub">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                                <a href="https://kisan-mithar-consultancy.vercel.app" className="pi-link pi-link-live"
                                    aria-label="Live Demo">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="pi-desc">
                            Full-stack agriculture advisory platform that processes soil data and delivers tailored
                            suggestions.
                            Built with real-time messaging (Socket.io), MongoDB for data persistence, and Fast2SMS OTP
                            authentication to ensure secure verified access.
                        </p>
                        <ul className="pi-bullets">
                            <li>Live presence tracking & uninterrupted message flow via Socket.io</li>
                            <li>Phone OTP authentication using Fast2SMS — no password needed</li>
                            <li>Soil analysis → personalised crop/fertiliser recommendations</li>
                        </ul>
                        <div className="pi-stack">
                            <span>ReactJS</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Socket.io</span><span>Tailwind
                                CSS</span>
                        </div>
                    </div>
                </article>

                {/* P2 */}
                <article className="project-item reveal" data-delay="80">
                    <div className="pi-visual">
                        <div className="pi-image-wrap">
                            <img src="/Assets/Projects/Gym.png" alt="Gym Management Interface Preview" />
                        </div>
                    </div>
                    <div className="pi-content">
                        <div className="pi-meta">
                            <span className="pi-num">02</span>
                            <span className="pi-date">Oct 2025 – Present</span>
                        </div>
                        <div className="pi-head">
                            <div>
                                <h3 className="pi-title">Gym Management System</h3>
                                <p className="pi-sub">Analytics & Customer Feedback Platform</p>
                            </div>
                            <div className="pi-links">
                                <a href="https://github.com/vishnuvalmiki6302/CoreX" className="pi-link"
                                    aria-label="GitHub">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                                <a href="https://core-x-lcqx.vercel.app/" className="pi-link pi-link-live"
                                    aria-label="Live Demo">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="pi-desc">
                            A customisable gym management platform featuring member tracking, agency-specific
                            dashboards, and visual analytics for feedback analysis. Enables teams to identify product
                            strengths, gaps, and user sentiment at a glance.
                        </p>
                        <ul className="pi-bullets">
                            <li>Personalised dashboards per agency — view only the data that matters</li>
                            <li>Interactive report sharing and visual chart analytics</li>
                            <li>Sentiment analysis to surface actionable product feedback</li>
                        </ul>
                        <div className="pi-stack">
                            <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Tailwind
                                CSS</span>
                        </div>
                    </div>
                </article>

                {/* P3 */}
                <article className="project-item reveal" data-delay="160">
                    <div className="pi-visual">
                        <div className="pi-image-wrap">
                            <img src="/Assets/Projects/StartUp Events.png" alt="Founders & Investors Interface Preview" />
                        </div>
                    </div>
                    <div className="pi-content">
                        <div className="pi-meta">
                            <span className="pi-num">03</span>
                            <span className="pi-date">Mar – Apr 2025</span>
                        </div>
                        <div className="pi-head">
                            <div>
                                <h3 className="pi-title">Startup Founders & Investors</h3>
                                <p className="pi-sub">Networking & Events Web Platform</p>
                            </div>
                            <div className="pi-links">
                                <a href="https://github.com/vishnuvalmiki6302/Events" className="pi-link"
                                    aria-label="GitHub">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="pi-desc">
                            A web platform connecting startup founders with investors, featuring secure authentication,
                            profi le management, and event promotion. Built with a PHP backend and a responsive
                            Tailwind-powered front-end, connected via RESTful APIs.
                        </p>
                        <ul className="pi-bullets">
                            <li>Startup/investor matching with public profiles and event listings</li>
                            <li>Secure PHP authentication with session management</li>
                            <li>REST APIs for real-time frontend/backend data synchronisation</li>
                        </ul>
                        <div className="pi-stack">
                            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Tailwind</span><span>PHP</span>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>
    </>
  );
}