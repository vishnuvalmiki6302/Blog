import React from 'react';

export default function Certifications() {
    const certifications = [
        {
            name: "ChatGPT LLM Applications",
            by: "DeepLearning.AI",
            desc: "Explored advanced prompt engineering and practical LLM resource integrations for optimized performance.",
            img: "/Assets/Certificates/ChatGpt LLM.png",
            delay: "0",
            year: "2025"
        },
        {
            name: "Introduction to Cloud Computing",
            by: "NPTEL",
            desc: "Detailed exploration of virtualization, cloud service models (IaaS, PaaS, SaaS), and architectural principles.",
            img: "/Assets/Certificates/NPTEL.png",
            delay: "300",
            year: "2025"
        },
        {
            name: "Computer Communications",
            by: "Coursera",
            desc: "Mastered networking fundamentals, network protocols, and core data transmission architectures.",
            img: "/Assets/Certificates/Coursera.png",
            delay: "100",
            year: "2024"
        },
        {
            name: "Technical Workshop",
            by: "LPU",
            desc: "Practical sessions on software architecture, rapid development, and iterative prototyping workflows.",
            img: "/Assets/Certificates/WorkShop.png",
            delay: "400",
            year: "2024"
        },
        {
            name: "Web Development Foundations",
            by: "FreeCodeCamp",
            desc: "Mastered building blocks of the web including responsive design, HTML5/CSS3, and layout systems.",
            img: "/Assets/Certificates/FreeCodeCamp.png",
            delay: "200",
            year: "2023"
        }
    ];

    return (
        <section id="certifications" className="section section-tint">
            <div className="container" style={{maxWidth: '1200px'}}>
                <div className="section-head text-center">
                    <div className="eyebrow">Academic & Professional</div>
                    <h2 className="section-h2">Certifications</h2>
                </div>

                <div className="cert-exact-timeline">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="cet-item reveal" data-delay={cert.delay}>
                            
                            <div className="cet-side cet-side-card">
                                <div className="cet-card-wrap">
                                    <div className="cet-img-box">
                                        <img src={cert.img} alt={cert.name} />
                                    </div>
                                    <div className="cet-info-box">
                                        <h3 className="cet-card-title">{cert.name}</h3>
                                        <p className="cet-card-desc">{cert.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cet-dot-wrap">
                                <div className="cet-dot"></div>
                            </div>

                            <div className="cet-side cet-meta-side">
                                <div className="meta-box">
                                    <span className={`cet-pill-exact ${idx % 2 !== 0 ? 'purple' : ''}`}>
                                        {cert.by}
                                    </span>
                                    <a href={cert.img} target="_blank" rel="noopener noreferrer" className="cet-view-link">
                                        View Certificate ↗
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
