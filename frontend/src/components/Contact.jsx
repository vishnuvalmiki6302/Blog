import React from 'react';

export default function Contact({ handleContactSubmit, formStatus }) {
  return (
    <>
      {/* CONTACT */}
    <section id="contact" className="section section-tint">
        <div className="container">
            <div className="contact-wrap">

                <div className="contact-left">
                    <div className="eyebrow">Contact</div>
                    <h2 className="section-h2">Let's work<br />together.</h2>
                    <p className="body-text">
                        Open to full-time roles, internships, and interesting freelance projects.
                        Send me a message and I'll respond within 24 hours.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:varh6302@gmail.com" className="clink">
                            <div className="clink-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div>
                                <p className="clink-label">Email</p>
                                <p className="clink-val">varh6302@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:+918074006300" className="clink">
                            <div className="clink-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <p className="clink-label">Phone</p>
                                <p className="clink-val">+91 80740 06300</p>
                            </div>
                        </a>
                        <a href="https://linkedin.com/in/vishnu0317" target="_blank" rel="noopener" className="clink">
                            <div className="clink-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </div>
                            <div>
                                <p className="clink-label">LinkedIn</p>
                                <p className="clink-val">vishnu0317</p>
                            </div>
                        </a>
                        <a href="https://github.com/vishnuvalmiki6302" target="_blank" rel="noopener" className="clink">
                            <div className="clink-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </div>
                            <div>
                                <p className="clink-label">GitHub</p>
                                <p className="clink-val">vishnuvalmiki6302</p>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleContactSubmit} action="https://formsubmit.co/varh6302@gmail.com"
                    method="POST">
                    {/* Formsubmit hidden configs */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Portfolio Message!" />
                    <div className="field-group">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" id="fname" name="name" placeholder="Jane Smith" autoComplete="name"
                            required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="femail">Email Address</label>
                        <input type="email" id="femail" name="email" placeholder="jane@company.com" autoComplete="email"
                            required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="fsubject">Subject</label>
                        <input type="text" id="fsubject" name="subject" placeholder="Job opportunity / Collaboration" />
                    </div>
                    <div className="field-group">
                        <label htmlFor="fmsg">Message</label>
                        <textarea id="fmsg" name="message" rows="5" placeholder="Tell me about the project or role…"
                            required></textarea>
                    </div>
                    <button type="submit" className={`btn-solid btn-full ${formStatus === 'loading' ? 'loading' : ''}`} id="sendBtn" disabled={formStatus === 'loading'}>
                        {formStatus === 'loading' ? (
                            <span className="btn-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <svg className="spinner" viewBox="0 0 50 50" style={{ width: '20px', height: '20px' }}>
                                    <circle className="path" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5"></circle>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Send Message'}
                    </button>

                    <div className={`form-feedback ${formStatus && formStatus !== 'loading' ? 'active' : ''}`}>
                        {formStatus === 'success' && (
                            <div className="form-toast form-toast-success" role="alert">
                                <div className="toast-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <div className="toast-content">
                                    <p className="toast-title">Message Sent!</p>
                                    <p className="toast-desc">Thank you for reaching out. I'll reply within 24 hours.</p>
                                </div>
                            </div>
                        )}

                        {formStatus === 'error' && (
                            <div className="form-toast form-toast-error" role="alert">
                                <div className="toast-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="15" y1="9" x2="9" y2="15" />
                                        <line x1="9" y1="9" x2="15" y2="15" />
                                    </svg>
                                </div>
                                <div className="toast-content">
                                    <p className="toast-title">Something went wrong</p>
                                    <p className="toast-desc">Please try again or email me directly.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </form>

            </div>
        </div>
    </section>
    </>
  );
}