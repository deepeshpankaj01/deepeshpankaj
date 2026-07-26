/* ==========================================================
   Deepesh Kumar Pankaj — Portfolio · script.js
   Premium interactions: cursor, counters, stagger, lightbox,
   magnetic buttons, smooth reveals, and form handling.
   ========================================================== */

'use strict';

/* ── Nav: scroll-aware + active highlight ─────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Scroll shadow
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 32);
  window.addEventListener('scroll', tick, { passive: true });
  tick();

  // Active nav link based on scroll position
  const links    = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  if (!links.length || !sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(s => obs.observe(s));
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
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
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

/* ── Scroll Reveal ───────────────────────────────────────── */
(function initReveal() {
  const revealEls  = document.querySelectorAll('.reveal');
  const staggerEls = document.querySelectorAll('.stagger-children');

  if (!revealEls.length && !staggerEls.length) return;

  // Fallback: no IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
    staggerEls.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Reveal observer
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      revealObs.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -56px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  // Stagger observer
  const staggerObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      staggerObs.unobserve(e.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });

  staggerEls.forEach(el => staggerObs.observe(el));
})();

/* ── Animated Number Counters ────────────────────────────── */
(function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCounter(el, target, duration = 1200) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    };
    requestAnimationFrame(update);
  }

  if (!('IntersectionObserver' in window)) {
    nums.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) el.textContent = target;
    });
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = parseInt(e.target.dataset.count, 10);
      if (!isNaN(target)) animateCounter(e.target, target);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  nums.forEach(el => obs.observe(el));
})();

/* ── Cursor Dot + Ring ───────────────────────────────────── */
(function initCursor() {
  // Only on pointer devices, not touch
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  }, { passive: true });

  function animateRing() {
    // Ring follows with slight lag for smoothness
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Scale ring on interactive elements
  const interactiveSelectors = 'a, button, [tabindex], .project-card, .gallery-item, .contact-link-card, .info-card, .skill-block';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelectors)) {
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(59,130,246,0.8)';
      dot.style.width  = '4px';
      dot.style.height = '4px';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelectors)) {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(59,130,246,0.5)';
      dot.style.width  = '6px';
      dot.style.height = '6px';
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();

/* ── Magnetic Button Effect ──────────────────────────────── */
(function initMagnetic() {
  const btns = document.querySelectorAll('.btn-primary, .btn-ghost');
  if (!btns.length || window.matchMedia('(hover: none)').matches) return;

  btns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1)';
      setTimeout(() => { btn.style.transition = ''; }, 400);
    });
  });
})();

/* ── Gallery Lightbox ────────────────────────────────────── */
(function initLightbox() {
  const figures = document.querySelectorAll('.gallery-item');
  if (!figures.length) return;

  // Build overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Photo lightbox');
  overlay.id = 'lightbox-overlay';
  Object.assign(overlay.style, {
    display:              'none',
    position:             'fixed',
    inset:                '0',
    zIndex:               '600',
    background:           'rgba(0,0,0,0.92)',
    backdropFilter:       'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    alignItems:           'center',
    justifyContent:       'center',
    padding:              '24px',
    cursor:               'zoom-out',
  });

  const img = document.createElement('img');
  img.alt = '';
  Object.assign(img.style, {
    maxWidth:     'min(900px, 92vw)',
    maxHeight:    '86svh',
    objectFit:    'contain',
    borderRadius: '14px',
    boxShadow:    '0 32px 100px rgba(0,0,0,0.7)',
    transition:   'opacity 0.25s, transform 0.25s',
    opacity:      '0',
    transform:    'scale(0.96)',
  });

  const cap = document.createElement('figcaption');
  Object.assign(cap.style, {
    position:       'absolute',
    bottom:         '28px',
    left:           '50%',
    transform:      'translateX(-50%)',
    color:          'rgba(255,255,255,0.55)',
    fontSize:       '0.78rem',
    fontFamily:     'Inter, sans-serif',
    fontWeight:     '500',
    letterSpacing:  '0.04em',
    whiteSpace:     'nowrap',
    pointerEvents:  'none',
  });

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('aria-label', 'Close lightbox');
  closeBtn.innerHTML = '&#215;';
  Object.assign(closeBtn.style, {
    position:       'absolute',
    top:            '20px',
    right:          '24px',
    width:          '40px',
    height:         '40px',
    borderRadius:   '50%',
    border:         '1px solid rgba(255,255,255,0.12)',
    background:     'rgba(255,255,255,0.06)',
    color:          'rgba(255,255,255,0.7)',
    fontSize:       '1.3rem',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    cursor:         'pointer',
    transition:     'background 0.2s, color 0.2s',
    fontFamily:     'inherit',
  });
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.background = 'rgba(255,255,255,0.14)';
    closeBtn.style.color = '#fff';
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.background = 'rgba(255,255,255,0.06)';
    closeBtn.style.color = 'rgba(255,255,255,0.7)';
  });

  overlay.append(img, cap, closeBtn);
  document.body.append(overlay);

  let figList = [...figures];
  let currentIdx = 0;

  // Prev/next buttons
  ['prev', 'next'].forEach(dir => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', dir === 'prev' ? 'Previous photo' : 'Next photo');
    btn.innerHTML = dir === 'prev' ? '&#8592;' : '&#8594;';
    Object.assign(btn.style, {
      position:       'absolute',
      top:            '50%',
      transform:      'translateY(-50%)',
      [dir === 'prev' ? 'left' : 'right']: '20px',
      width:          '44px',
      height:         '44px',
      borderRadius:   '50%',
      border:         '1px solid rgba(255,255,255,0.12)',
      background:     'rgba(255,255,255,0.06)',
      color:          'rgba(255,255,255,0.7)',
      fontSize:       '1.2rem',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      cursor:         'pointer',
      transition:     'background 0.2s, color 0.2s',
      fontFamily:     'inherit',
    });
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (dir === 'prev') navigate(-1);
      else navigate(1);
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(255,255,255,0.14)';
      btn.style.color = '#fff';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'rgba(255,255,255,0.06)';
      btn.style.color = 'rgba(255,255,255,0.7)';
    });
    overlay.append(btn);
  });

  function showImage(i, animate = false) {
    const fig  = figList[i];
    const imgEl = fig.querySelector('img');
    const capEl = fig.querySelector('figcaption');
    if (!imgEl) return;

    if (animate) {
      img.style.opacity   = '0';
      img.style.transform = 'scale(0.96)';
    }
    img.src = imgEl.src;
    img.alt = imgEl.alt || '';
    cap.textContent = capEl ? capEl.textContent : '';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.opacity   = '1';
        img.style.transform = 'scale(1)';
      });
    });
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + figList.length) % figList.length;
    showImage(currentIdx, true);
  }

  function openLightbox(idx) {
    currentIdx = idx;
    img.style.opacity   = '0';
    img.style.transform = 'scale(0.96)';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    showImage(currentIdx);
  }

  function closeLightbox() {
    img.style.opacity   = '0';
    img.style.transform = 'scale(0.96)';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      img.src = '';
    }, 200);
  }

  figures.forEach((fig, idx) => {
    const i = fig.querySelector('img');
    if (!i) return;
    fig.setAttribute('tabindex', '0');
    const open = () => openLightbox(idx);
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ── Contact Form → Mailto ───────────────────────────────── */
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

    let valid = true;
    ['name', 'email', 'message'].forEach(field => {
      const el = form.elements[field];
      if (!el || el.value.trim()) return;
      valid = false;
      el.style.borderColor = '#f87171';
      el.style.boxShadow   = '0 0 0 3px rgba(248,113,113,0.12)';
      el.addEventListener('input', function fix() {
        el.style.borderColor = '';
        el.style.boxShadow   = '';
        el.removeEventListener('input', fix);
      }, { once: true });
    });
    if (!valid) return;

    const sub  = subject || 'Portfolio contact — ' + name;
    const body = `Hi Deepesh,\n\n${message}\n\n—\n${name}\n${email}`;
    window.location.href =
      `mailto:deepeshkumar79239@gmail.com` +
      `?subject=${encodeURIComponent(sub)}` +
      `&body=${encodeURIComponent(body)}`;

    const orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Opening email…';
    setTimeout(() => { btn.disabled = false; btn.textContent = orig; }, 2800);
  });
})();

/* ── Smooth project card hover glow ─────────────────────── */
(function initCardGlow() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length || window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background =
        `radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.04) 0%, transparent 60%), var(--canvas-card)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
})();

/* ── Page Load Orchestration ─────────────────────────────── */
(function initPageLoad() {
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.4s ease';

  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      document.documentElement.style.opacity = '1';
    });
  });

  // Fallback if load fires early
  if (document.readyState === 'complete') {
    document.documentElement.style.opacity = '1';
  }
})();
