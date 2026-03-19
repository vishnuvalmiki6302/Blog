import React from 'react';

export default function Education() {
  return (
    <section id="education" className="section">
        <div className="container">
            <div className="section-head">
                <div className="eyebrow">Academic History</div>
                <h2 className="section-h2">Education</h2>
            </div>

            <div className="edu-timeline">
                
                <div className="et-item reveal" data-delay="0">
                    <div className="et-side et-left">
                        <div className="et-card">
                            <div className="et-head">
                                <div>
                                    <h3 className="et-title">Lovely Professional University</h3>
                                    <p className="et-subtitle">B.Tech &mdash; Computer Science & Engineering</p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px'}}>
                                    <span className="et-badge gpa" style={{display: 'inline-block'}}>CGPA 7.39</span>
                                    <div className="et-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="et-meta-bar">
                                <div className="et-loc">Punjab, India</div>
                            </div>
                            <p className="et-desc">Focusing on full-stack development, data structures, algorithms, and practical modern software architecture. Embracing both theoretical foundations and hands-on engineering challenges.</p>
                        </div>
                    </div>

                    <div className="et-center">
                        <div className="et-dot pulse"></div>
                        <div className="et-line"></div>
                    </div>

                    <div className="et-side et-right et-text">
                        <span className="et-year">2023 &mdash; Now</span>
                    </div>
                </div>

                <div className="et-item reveal" data-delay="100">
                    <div className="et-side et-left et-text text-right">
                        <span className="et-year">2021 &mdash; 2023</span>
                    </div>

                    <div className="et-center">
                        <div className="et-dot"></div>
                        <div className="et-line"></div>
                    </div>

                    <div className="et-side et-right">
                        <div className="et-card">
                            <div className="et-head">
                                <div>
                                    <h3 className="et-title">Narayana Junior College</h3>
                                    <p className="et-subtitle">Intermediate &middot; Class XII (MPC)</p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px'}}>
                                    <span className="et-badge" style={{display: 'inline-block'}}>91.4%</span>
                                    <div className="et-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="et-meta-bar">
                                <div className="et-loc">Anantapur, Andhra Pradesh</div>
                            </div>
                            <p className="et-desc">Built a strong foundation in Mathematics, Physics, and Chemistry, laying the groundwork for complex problem-solving and rigorous analytical thinking methodologies.</p>
                        </div>
                    </div>
                </div>

                <div className="et-item reveal" data-delay="200">
                    <div className="et-side et-left">
                        <div className="et-card">
                            <div className="et-head">
                                <div>
                                    <h3 className="et-title">Sree Nethaji EM High School</h3>
                                    <p className="et-subtitle">Matriculation &middot; Class X</p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px'}}>
                                    <span className="et-badge top" style={{display: 'inline-block'}}>98.6%</span>
                                    <div className="et-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                           <circle cx="12" cy="8" r="7"></circle>
                                           <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="et-meta-bar">
                                <div className="et-loc">Narpala, Anantapur</div>
                            </div>
                            <p className="et-desc">Excelled in academic subjects, fostering a passionate early interest in science, technology, and analytical thinking.</p>
                        </div>
                    </div>

                    <div className="et-center">
                        <div className="et-dot"></div>
                        <div className="et-line" style={{display: 'none'}}></div>
                    </div>

                    <div className="et-side et-right et-text">
                        <span className="et-year">2020 &mdash; 2021</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}