import React from 'react';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-layout">
                    <div className="about-img-side">
                        <div className="about-photo-wrap">
                            <img src="/Assets/Vishnu.png" alt="C Guru Vishnu Vardhan" />
                        </div>
                    </div>
                    <div className="about-text-side">
                        <div className="eyebrow">About Me</div>
                        <h2 className="section-h2">Building with purpose,<br />shipping with precision.</h2>

                        <div className="about-rich-content">
                            <p className="body-text">
                                I'm a final-year <strong>Computer Science Engineer</strong> currently studying at Lovely
                                Professional University. My core philosophy relies on bridging robust backend logic with
                                seamless user interfaces and automated cloud infrastructure. I don't just write code; I design modular,
                                scalable systems and streamline deployments end-to-end.
                            </p>

                            <div className="about-features">
                                <div className="af-item reveal" data-delay="0">
                                    <div className="af-icon"><i className="devicon-mongodb-plain coloring"></i></div>
                                    <div className="af-info">
                                        <h4 className="af-title">Backend Architecture</h4>
                                        <p className="af-desc">Designing scalable REST APIs and secure dynamic schemas.</p>
                                    </div>
                                </div>
                                <div className="af-item reveal" data-delay="100">
                                    <div className="af-icon"><i className="devicon-react-original coloring"></i></div>
                                    <div className="af-info">
                                        <h4 className="af-title">Frontend Engineering</h4>
                                        <p className="af-desc">Crafting pixel-perfect, highly responsive User Interfaces.</p>
                                    </div>
                                </div>
                                <div className="af-item reveal" data-delay="200">
                                    <div className="af-icon"><i className="devicon-docker-plain colored"></i></div>
                                    <div className="af-info">
                                        <h4 className="af-title">DevOps & Cloud</h4>
                                        <p className="af-desc">Automating CI/CD pipelines, containerization & cloud deployments.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-actions reveal" data-delay="150"
                                style={{ marginTop: '32px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                                <a href="vishnucv_91.pdf" download="vishnucv_91.pdf" className="btn-solid cv-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" style={{ marginRight: '8px' }}>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                        <div className="kpi-row">
                            <div className="kpi"><span className="kpi-v" data-count="3">3 +</span><span className="kpi-plus"></span><span
                                className="kpi-l">Full-stack projects</span></div>
                            <div className="kpi"><span className="kpi-v" data-count="190">190 +</span><span
                                className="kpi-plus"></span><span className="kpi-l">Problems solved</span></div>
                            <div className="kpi"><span className="kpi-v" data-count="7" data-float="7.39">7.39</span><span
                                className="kpi-l">GPA score</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
