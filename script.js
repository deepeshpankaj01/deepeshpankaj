/**
 * Deepesh Kumar Pankaj — Spatial 3D Glassmorphic HUD Engine
 * Zero-dependency, high-performance interactive client scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initSpatialCanvas();
  initCursorSpotlight();
  initHeaderScroll();
  initMobileNav();
  initProjectFilters();
  initPhotoLightbox();
  initContactForm();
  initEmailCopy();
  initCardTilt();
});

/* ── 1. Spatial 3D Zero-Gravity Particle Canvas ─────────────── */
function initSpatialCanvas() {
  const canvas = document.getElementById('spatial-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 0.8,
      color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(112, 0, 255, ',
      alpha: Math.random() * 0.4 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const lineAlpha = (1 - dist / 120) * 0.15;
          ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ── 2. Cursor Spotlight Tracker ────────────────────────────── */
function initCursorSpotlight() {
  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, { passive: true });
}

/* ── 3. Sticky Header Scroll ────────────────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 4. Mobile Navigation Drawer ────────────────────────────── */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ── 5. Project Filter Tabs ─────────────────────────────────── */
function initProjectFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.bento-card[data-category]');
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';

      cards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── 6. Photo Lightbox Modal ────────────────────────────────── */
function initPhotoLightbox() {
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close Preview">&times; Close</button>
        <img src="" alt="High resolution inspection" id="lightbox-img" />
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = modal.querySelector('.lightbox-close');

  const openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });

  const photoCards = document.querySelectorAll('.photo-hud-card, [data-lightbox]');
  photoCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const img = card.querySelector('img');
      const caption = card.querySelector('.photo-caption, .framed-caption');
      if (img) {
        openLightbox(img.src, caption ? caption.textContent.trim() : img.alt);
      }
    });
  });
}

/* ── 7. Interactive Contact Form ────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const feedback = form.querySelector('.form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    if (feedback) {
      feedback.textContent = `⚡ Message received, ${name}! Deepesh will get back to you shortly at ${email}.`;
      feedback.className = 'form-feedback success';
      feedback.style.display = 'block';
    }

    form.reset();
  });
}

/* ── 8. One-Click Email Copy ────────────────────────────────── */
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  if (!copyButtons.length) return;

  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  let toastTimeout;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'deepeshkumar79239@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        toast.textContent = `✓ Copied ${email} to clipboard!`;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.remove('show');
        }, 2600);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  });
}

/* ── 9. Subtle 3D Card Tilt ─────────────────────────────────── */
function initCardTilt() {
  // Only apply on fine-pointer devices (desktop)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const tiltCards = document.querySelectorAll('.bento-card, .portrait-frame-wrap');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
