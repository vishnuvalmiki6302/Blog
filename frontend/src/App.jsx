import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setIsStuck(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(s => { if(window.scrollY >= s.offsetTop - 150) current = s.id; });
      document.querySelectorAll('.nav-item').forEach(li => {
          li.classList.toggle('active', li.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const words = [
      'full-stack web apps.',
      'CI/CD pipelines.',
      'cloud infrastructure.',
      'containerized deployments.',
      'scalable REST APIs.',
      'clean interfaces.',
    ];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    let t;
    const tick = () => {
      const w = words[wordIdx];
      if (isDeleting) charIdx--; else charIdx++;
      setTypedText(w.substring(0, charIdx));
      let d = 150 - Math.random() * 80; if (isDeleting) d /= 2;
      if (!isDeleting && charIdx === w.length) { d = 2000; isDeleting = true; }
      else if (isDeleting && charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; d = 400; }
      t = setTimeout(tick, d);
    };
    tick();

    return () => { lenis.destroy(); window.removeEventListener('scroll', handleScroll); observer.disconnect(); clearTimeout(t); };
  }, []);

  const [formStatus, setFormStatus] = useState(''); // '', 'success', 'error'

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    
    // Set to loading
    setFormStatus('loading');
    
    // Define the URL (allowing for environment override or default)
    const apiUrl = (import.meta.env.VITE_API_URL || 'https://blog-sigma-six.vercel.app').replace(/\/$/, "");
    
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        const errData = await response.json();
        console.error('API selection error status:', response.status, errData);
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Network or fetch error:', err);
      setFormStatus('error');
    }
    
    // Auto-clear success/error status after 6 seconds
    setTimeout(() => setFormStatus(''), 6000);
  };

  return (
    <div className={menuOpen ? 'body-menu-open' : ''}>
      <Navbar isStuck={isStuck} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero typedText={typedText} />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certifications />
      <Achievements />
      <Education />
      <Contact handleContactSubmit={handleContactSubmit} formStatus={formStatus} setFormStatus={setFormStatus} />
      <Footer />
    </div>
  );
}
