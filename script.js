/**
 * Deepesh Pankaj — Personal Brand Architecture
 * Handcrafted Client-Side Interactions (Zero-dependency, vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initActiveNav();
  initEmailCopy();
  initPhotoLightbox();
});

/* ── Header Sticky Border on Scroll ────────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Navigation Drawer ──────────────────────────────── */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
  });

  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Active Nav Link Detection ─────────────────────────────── */
function initActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-drawer a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const target = href.toLowerCase();
    const isCurrent =
      (currentPath.endsWith('/') && (target === 'index.html' || target === '/' || target === './')) ||
      (currentPath.includes('projects') && target.includes('projects')) ||
      (currentPath.includes('highlights') && target.includes('highlights')) ||
      (currentPath.includes('about') && target.includes('about'));

    if (isCurrent) {
      link.classList.add('active');
    }
  });
}

/* ── Email Copy Helper with Toast ──────────────────────────── */
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
        toast.textContent = `Copied ${email} to clipboard`;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.remove('show');
        }, 2400);
      } catch (err) {
        // Fallback: prompt or direct mailto
        window.location.href = `mailto:${email}`;
      }
    });
  });
}

/* ── Interactive Image Lightbox ────────────────────────────── */
function initPhotoLightbox() {
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close image preview">&times; Esc</button>
        <img src="" alt="High resolution preview" id="lightbox-img" />
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

  // Attach to precision framed cards with data-lightbox or images inside framed cards
  const framedCards = document.querySelectorAll('.framed-card, [data-lightbox]');
  framedCards.forEach((card) => {
    card.style.cursor = 'zoom-in';
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an actual link
      if (e.target.closest('a')) return;

      const img = card.querySelector('img');
      const caption = card.querySelector('.framed-caption, figcaption');
      if (img) {
        openLightbox(img.src, caption ? caption.textContent.trim() : img.alt);
      }
    });
  });
}
