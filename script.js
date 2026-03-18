/* ═══════════════════════════════════════
   script.js  —  Vishnu Vardhan Portfolio
   ═══════════════════════════════════════ */
'use strict';

/* ── Navbar: scroll class + active link ── */
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

function handleScroll() {
  /* sticky glass effect */
  navbar.classList.toggle('stuck', window.scrollY > 40);

  /* active nav highlight */
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    item.classList.toggle('active', href === '#' + current);
  });
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ── Mobile toggle ── */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  navMenu.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── Typewriter ── */
const typedEl = document.getElementById('typed');
if (typedEl) {
  const words = [
    'full-stack web apps.',
    'real-time platforms.',
    'Android applications.',
    'scalable REST APIs.',
    'clean interfaces.',
  ];
  let wi = 0, ci = 0, del = false;

  (function tick() {
    const w = words[wi];
    typedEl.textContent = del ? w.slice(0, --ci) : w.slice(0, ++ci);

    let t = del ? 46 : 88;
    if (!del && ci === w.length) { t = 1900; del = true; }
    else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; t = 380; }

    setTimeout(tick, t);
  })();
}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay || 0);
    setTimeout(() => entry.target.classList.add('in'), delay);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ── KPI counter animation ── */
function runCounter(el) {
  const isFloat = el.dataset.float;
  const target = isFloat ? parseFloat(isFloat) : parseInt(el.dataset.count, 10);
  const dur = 1400;
  const start = performance.now();
  const ease = t => 1 - Math.pow(1 - t, 3);

  (function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = isFloat
      ? (ease(p) * target).toFixed(2)
      : Math.floor(ease(p) * target);
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = isFloat ? target.toFixed(2) : target;
  })(start);
}

const kpiObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    runCounter(entry.target);
    kpiObs.unobserve(entry.target);
  });
}, { threshold: 0.7 });

document.querySelectorAll('.kpi-v').forEach(el => kpiObs.observe(el));

/* ── Contact form ── */
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const formOk = document.getElementById('formOk');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending…';

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === "true" || data.success === true) {
          form.reset();
          sendBtn.style.display = 'none';
          formOk.classList.add('show');
          formOk.textContent = "✓ Message sent! I'll reply within 24 hours.";

          setTimeout(() => {
            formOk.classList.remove('show');
            sendBtn.style.display = '';
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send Message';
          }, 4500);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      })
      .catch(error => {
        console.error("Form error:", error);
        sendBtn.disabled = false;
        sendBtn.textContent = 'Failed. Try Again?';

        setTimeout(() => {
          sendBtn.textContent = 'Send Message';
        }, 3000);
      });
  });
}

/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Smooth Scroll (Lenis) ── */
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Update fixed nav menu and elements with Lenis scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, { offset: 0 });
      }
    });
  });
}
