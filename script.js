/* ==========================================================
   Deepesh Kumar Pankaj — Portfolio Experience Engine
   Interactions: Fluid Cursor, Counter Easing, Spotlight Tracking,
   Accessible Lightbox, Magnetic Pull & Form Handling
   ========================================================== */

'use strict';

/* ── 1. Scroll-Aware Navigation & Active Section Tracking ── */
(function initNavigation() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Header elevation on scroll
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active navigation link tracking
  const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a');
  const trackedSections = document.querySelectorAll('header[id], section[id]');

  if (!navLinks.length || !trackedSections.length) return;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const currentId = entry.target.id;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentId}`);
      });
    });
  }, { rootMargin: '-25% 0px -60% 0px' });

  trackedSections.forEach(sec => sectionObserver.observe(sec));
})();

/* ── 2. Mobile Drawer Navigation ─────────────────────────── */
(function initMobileDrawer() {
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  if (!burger || !drawer) return;

  let isOpen = false;

  function toggleMenu(state) {
    isOpen = state;
    drawer.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));

    const spans = burger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      document.body.style.overflow = 'hidden';
    } else {
      spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });
      document.body.style.overflow = '';
    }
  }

  burger.addEventListener('click', () => toggleMenu(!isOpen));

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (isOpen && !burger.contains(e.target) && !drawer.contains(e.target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (isOpen && e.key === 'Escape') toggleMenu(false);
  });
})();

/* ── 3. Smooth Intersection Observer Scroll Reveal ───────── */
(function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const staggered = document.querySelectorAll('.stagger-children');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
    staggered.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));
  staggered.forEach(el => revealObserver.observe(el));
})();

/* ── 4. Eased Metric Numerical Counters ──────────────────── */
(function initMetricCounters() {
  const counterElements = document.querySelectorAll('[data-count]');
  if (!counterElements.length) return;

  const easeOutQuad = t => t * (2 - t);

  function runCounter(el, targetNumber, duration = 1300) {
    const startTime = performance.now();
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.round(easeOutQuad(progress) * targetNumber);
      el.textContent = currentVal;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = targetNumber;
      }
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    counterElements.forEach(el => {
      el.textContent = el.dataset.count;
    });
    return;
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = parseInt(entry.target.dataset.count, 10);
      if (!isNaN(target)) runCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counterElements.forEach(el => counterObserver.observe(el));
})();

/* ── 5. Atmospheric Cursor Follower (Pointer Devices Only) ── */
(function initCustomCursor() {
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    if (!isMoving) {
      isMoving = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
  }, { passive: true });

  function followLoop() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(followLoop);
  }
  followLoop();

  const interactiveElements = 'a, button, .moment-card, .project-card, .flagship-card, .lab-card, .pillar-card, .fact-card, .skill-domain-card';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(96, 165, 250, 0.85)';
      ring.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
      dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveElements)) {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.borderColor = 'rgba(96, 165, 250, 0.45)';
      ring.style.backgroundColor = 'transparent';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    isMoving = false;
  });
})();

/* ── 6. Card Spotlight Cursor Tracking ────────────────────── */
(function initCardSpotlights() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.flagship-card, .project-card, .lab-card, .research-feature-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle 380px at ${x}% ${y}%, rgba(59, 130, 246, 0.06), transparent 70%), var(--canvas-card)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
})();

/* ── 7. Magnetic Button Pull ─────────────────────────────── */
(function initMagneticButtons() {
  if (window.matchMedia('(hover: none)').matches) return;

  const magneticTargets = document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta');
  if (!magneticTargets.length) return;

  magneticTargets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.22;
      const deltaY = (e.clientY - centerY) * 0.22;
      btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => { btn.style.transition = ''; }, 400);
    });
  });
})();

/* ── 8. High-Performance Accessible Photo Lightbox ────────── */
(function initPhotoLightbox() {
  const figures = document.querySelectorAll('.moment-card');
  if (!figures.length) return;

  const overlay = document.createElement('div');
  overlay.id = 'lightbox-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'High-resolution photo viewer');
  Object.assign(overlay.style, {
    display:              'none',
    position:             'fixed',
    inset:                '0',
    zIndex:               '1000',
    background:           'rgba(5, 6, 8, 0.94)',
    backdropFilter:       'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    alignItems:           'center',
    justifyContent:       'center',
    padding:              '30px',
    cursor:               'zoom-out',
    transition:           'opacity 0.25s ease',
    opacity:              '0',
  });

  const modalImg = document.createElement('img');
  modalImg.alt = '';
  Object.assign(modalImg.style, {
    maxWidth:     'min(980px, 92vw)',
    maxHeight:    '85vh',
    objectFit:    'contain',
    borderRadius: '16px',
    boxShadow:    '0 32px 100px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    transition:   'opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out)',
    opacity:      '0',
    transform:    'scale(0.95)',
  });

  const modalCaption = document.createElement('div');
  Object.assign(modalCaption.style, {
    position:      'absolute',
    bottom:        '28px',
    left:          '50%',
    transform:     'translateX(-50%)',
    color:         'rgba(255, 255, 255, 0.75)',
    fontSize:      '0.84rem',
    fontFamily:    'Inter, sans-serif',
    fontWeight:    '500',
    letterSpacing: '0.02em',
    whiteSpace:    'nowrap',
    pointerEvents: 'none',
  });

  const closeButton = document.createElement('button');
  closeButton.setAttribute('aria-label', 'Close photo viewer');
  closeButton.innerHTML = '&times;';
  Object.assign(closeButton.style, {
    position:       'absolute',
    top:            '24px',
    right:          '28px',
    width:          '44px',
    height:         '44px',
    borderRadius:   '50%',
    border:         '1px solid rgba(255, 255, 255, 0.15)',
    background:     'rgba(255, 255, 255, 0.08)',
    color:          '#FFFFFF',
    fontSize:       '1.5rem',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    cursor:         'pointer',
    transition:     'background 0.2s, transform 0.2s',
  });
  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
    closeButton.style.transform = 'scale(1.08)';
  });
  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.background = 'rgba(255, 255, 255, 0.08)';
    closeButton.style.transform = 'scale(1)';
  });

  overlay.append(modalImg, modalCaption, closeButton);
  document.body.append(overlay);

  const figureList = Array.from(figures);
  let activeIndex = 0;

  // Arrow controls
  ['prev', 'next'].forEach(dir => {
    const arrow = document.createElement('button');
    arrow.setAttribute('aria-label', dir === 'prev' ? 'Previous image' : 'Next image');
    arrow.innerHTML = dir === 'prev' ? '&#8592;' : '&#8594;';
    Object.assign(arrow.style, {
      position:       'absolute',
      top:            '50%',
      transform:      'translateY(-50%)',
      [dir === 'prev' ? 'left' : 'right']: '24px',
      width:          '48px',
      height:         '48px',
      borderRadius:   '50%',
      border:         '1px solid rgba(255, 255, 255, 0.15)',
      background:     'rgba(255, 255, 255, 0.08)',
      color:          '#FFFFFF',
      fontSize:       '1.3rem',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      cursor:         'pointer',
      transition:     'background 0.2s, transform 0.2s',
    });
    arrow.addEventListener('click', (e) => {
      e.stopPropagation();
      stepImage(dir === 'prev' ? -1 : 1);
    });
    arrow.addEventListener('mouseenter', () => {
      arrow.style.background = 'rgba(255, 255, 255, 0.2)';
      arrow.style.transform = 'translateY(-50%) scale(1.08)';
    });
    arrow.addEventListener('mouseleave', () => {
      arrow.style.background = 'rgba(255, 255, 255, 0.08)';
      arrow.style.transform = 'translateY(-50%) scale(1)';
    });
    overlay.append(arrow);
  });

  function displayImage(idx, animate = false) {
    const fig = figureList[idx];
    const imgElement = fig.querySelector('img');
    const capElement = fig.querySelector('figcaption');
    if (!imgElement) return;

    if (animate) {
      modalImg.style.opacity = '0';
      modalImg.style.transform = 'scale(0.96)';
    }

    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt || '';
    modalCaption.textContent = capElement ? capElement.textContent : '';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modalImg.style.opacity = '1';
        modalImg.style.transform = 'scale(1)';
      });
    });
  }

  function stepImage(offset) {
    activeIndex = (activeIndex + offset + figureList.length) % figureList.length;
    displayImage(activeIndex, true);
  }

  function openLightbox(idx) {
    activeIndex = idx;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      displayImage(activeIndex, false);
    });
  }

  function closeLightbox() {
    overlay.style.opacity = '0';
    modalImg.style.opacity = '0';
    modalImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      modalImg.src = '';
    }, 220);
  }

  figureList.forEach((fig, index) => {
    fig.setAttribute('tabindex', '0');
    const trigger = () => openLightbox(index);
    fig.addEventListener('click', trigger);
    fig.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger();
      }
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  closeButton.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepImage(-1);
    if (e.key === 'ArrowRight') stepImage(1);
  });
})();

/* ── 9. Direct Email Mailto Form Verification ────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('contactSubmit');
  if (!form || !submitButton) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (form.elements['name']?.value || '').trim();
    const email = (form.elements['email']?.value || '').trim();
    const subject = (form.elements['subject']?.value || '').trim();
    const message = (form.elements['message']?.value || '').trim();

    let hasError = false;

    ['name', 'email', 'message'].forEach(fieldKey => {
      const field = form.elements[fieldKey];
      if (!field || field.value.trim()) return;
      hasError = true;
      field.style.borderColor = '#EF4444';
      field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
      field.addEventListener('input', function removeError() {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        field.removeEventListener('input', removeError);
      }, { once: true });
    });

    if (hasError) return;

    const emailSubject = subject || `Portfolio Inquiry from ${name}`;
    const emailBody = `Hi Deepesh,\n\n${message}\n\n—\nSender: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:deepeshkumar79239@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Opening Email Client…';
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 2800);
  });
})();
