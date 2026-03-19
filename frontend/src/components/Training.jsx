import React from 'react';

export default function Training() {
  return (
    <section id="training" className="section section-tint">
        <div className="container">
            <div className="section-head">
                <div className="eyebrow">Background</div>
                <h2 className="section-h2">Training</h2>
            </div>

            <div className="project-list" style={{borderTop: 'none'}}>
                <article className="project-item reveal" data-delay="0"
                    style={{borderTop: 'none', borderBottom: 'none', paddingTop: '0', paddingBottom: '0'}}>
                    <div className="pi-visual">
                        <div className="pi-image-wrap">
                            <img src="/Assets/Kotlin.png" alt="Kotlin Training" />
                        </div>
                    </div>
                    <div className="pi-content">
                        <div className="pi-meta">
                            <span className="pi-date">Jun – Jul 2025</span>
                        </div>
                        <div className="pi-head">
                            <div>
                                <h3 className="pi-title">Android Developer Pro</h3>
                                <p className="pi-sub">Hands-on Project Training</p>
                            </div>
                        </div>
                        <p className="pi-desc">
                            Mastered Kotlin programming, OOP principles, and Android Studio. Built mobile UIs with XML
                            layouts delivering responsive, production-ready app behaviour.
                        </p>
                        <div className="pi-stack" style={{marginTop: '24px'}}>
                            <span>Kotlin</span><span>Android Studio</span><span>XML</span><span>Mobile UI</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
  );
}
