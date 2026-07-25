/* ==========================================================
   Deepesh Kumar Pankaj — Portfolio · script.js
   ========================================================== */

'use strict';

/* ── Nav: scroll-aware shadow + blur ─────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', tick, { passive: true });
  tick();
})();

/* ── Mobile burger menu ──────────────────────────────────── */
(function initBurger() {
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  if (!burger || !drawer) return;

  let open = false;

  function setMenu(state) {
    open = state;
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
    const [s0, s1, s2] = burger.querySelectorAll('span');
    if (open) {
      s0.style.transform = 'translateY(6.5px) rotate(45deg)';
      s1.style.opacity   = '0';
      s2.style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      [s0, s1, s2].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }

  burger.addEventListener('click', () => setMenu(!open));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', e => {
    if (open && !burger.contains(e.target) && !drawer.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (open && e.key === 'Escape') setMenu(false);
  });
})();

/* ── Active nav link highlight ───────────────────────────── */
(function initActiveNav() {
  const links    = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  if (!links.length || !sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  sections.forEach(s => obs.observe(s));
})();

/* ── Scroll reveal ───────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      // Slight stagger for sibling reveals
      const delay = Math.min(i * 30, 160);
      setTimeout(() => e.target.classList.add('is-visible'), delay);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => obs.observe(el));
})();

/* ── Contact form → mailto ───────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('contactSubmit');
  if (!form || !btn) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = (form.elements['name']?.value    || '').trim();
    const email   = (form.elements['email']?.value   || '').trim();
    const subject = (form.elements['subject']?.value || '').trim();
    const message = (form.elements['message']?.value || '').trim();

    if (!name || !email || !message) {
      ['name', 'email', 'message'].forEach(field => {
        const el = form.elements[field];
        if (!el || el.value.trim()) return;
        el.style.borderColor = '#dc2626';
        el.addEventListener('input', function fix() {
          el.style.borderColor = '';
          el.removeEventListener('input', fix);
        }, { once: true });
      });
      return;
    }

    const sub  = subject || 'Portfolio contact';
    const body = `Hi Deepesh,\n\n${message}\n\n—\n${name}\n${email}`;
    window.location.href =
      `mailto:deepeshkumar79239@gmail.com` +
      `?subject=${encodeURIComponent(sub)}` +
      `&body=${encodeURIComponent(body)}`;

    const orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Opening email client…';
    setTimeout(() => { btn.disabled = false; btn.textContent = orig; }, 2600);
  });
})();

/* ── Gallery lightbox ────────────────────────────────────── */
(function initLightbox() {
  const figures = document.querySelectorAll('.gallery-item');
  if (!figures.length) return;

  // Overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Photo lightbox');
  Object.assign(overlay.style, {
    display: 'none',
    position: 'fixed',
    inset: '0',
    zIndex: '500',
    background: 'rgba(5,8,16,0.90)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    cursor: 'zoom-out',
  });

  const img = document.createElement('img');
  Object.assign(img.style, {
    maxWidth: 'min(860px, 94vw)',
    maxHeight: '88svh',
    objectFit: 'contain',
    borderRadius: '12px',
    boxShadow: '0 28px 80px rgba(0,0,0,0.55)',
    transition: 'opacity 0.22s',
    opacity: '0',
  });

  const cap = document.createElement('p');
  Object.assign(cap.style, {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'rgba(255,255,255,0.65)',
    fontSize: '0.8rem',
    fontFamily: 'Inter, sans-serif',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  });

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('aria-label', 'Close');
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '18px',
    right: '22px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.10)',
    color: '#fff',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s',
  });
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = 'rgba(255,255,255,0.20)');
  closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = 'rgba(255,255,255,0.10)');

  overlay.append(img, cap, closeBtn);
  document.body.append(overlay);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt;
    cap.textContent = alt;
    img.style.opacity = '0';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => { img.style.opacity = '1'; });
  }

  function closeLightbox() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    img.src = '';
  }

  figures.forEach(fig => {
    const i = fig.querySelector('img');
    if (!i) return;
    fig.setAttribute('tabindex', '0');
    const open = () => openLightbox(i.src, i.alt);
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display !== 'none') closeLightbox();
  });
})();
