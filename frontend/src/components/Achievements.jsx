import React from 'react';

export default function Achievements() {
    const achievements = [
        {
            value: "100",
            plus: "+",
            label: "Coding Ninjas",
            subtitle: "Global recognition for solving complex algorithmic problems with optimized logic on the Code 360 platform.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            value: "90",
            plus: "+",
            label: "DSA Leetcode Problems",
            subtitle: "Extensive problem-solving record across LeetCode and other platforms focusing on data structures and efficiency.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            )
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <div className="section-head text-center">
                    <div className="eyebrow">Milestones</div>
                    <h2 className="section-h2">Professional Achievements</h2>
                </div>

                <div className="ach-grid-main">
                    {achievements.map((ach, idx) => (
                        <div key={idx} className="ach-card-pro reveal" data-delay={idx * 150}>
                            <div className="ach-icon-pro">
                                {ach.icon}
                            </div>
                            <div className="kpi">
                                <span className="kpi-v">
                                    {ach.value}
                                    <span className="kpi-plus">{ach.plus}</span>
                                </span>
                            </div>
                            <h3>{ach.label}</h3>
                            <p>{ach.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
