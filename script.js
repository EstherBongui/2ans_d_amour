(function () {
  'use strict';

  // ---- Date de début du couple : 21 février 2024 ----
  const COUPLE_START = new Date('2024-02-21');

  // ---- Compteur de jours ----
  function updateDaysCounter() {
    const el = document.getElementById('days-counter');
    if (!el) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(COUPLE_START);
    start.setHours(0, 0, 0, 0);
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    el.textContent = diff >= 0 ? diff : '—';
  }

  // ---- Enveloppe + lettre ----
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const letter = document.getElementById('letter');

  if (envelopeWrapper && letter) {
    envelopeWrapper.addEventListener('click', function () {
      if (envelopeWrapper.classList.contains('opened')) return;
      envelopeWrapper.classList.add('opened');
      letter.classList.add('visible');
      letter.setAttribute('aria-hidden', 'false');
    });
  }

  // ---- Navigation mobile ----
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }

  // ---- Smooth scroll + fermer menu mobile au clic ----
  document.querySelectorAll('.nav-list a, .hero-cta').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navList && navList.classList.remove('open');
      }
    });
  });

  // ---- Timeline : apparition au scroll ----
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, observerOptions);

  timelineItems.forEach(function (item) {
    observer.observe(item);
  });

  // ---- Galerie : lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox && lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox && lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox && lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.galerie-item').forEach(function (item) {
    item.addEventListener('click', function () {
      if (!lightbox || !lightboxImg) return;
      const img = item.querySelector('.galerie-img');
      const caption = item.querySelector('.galerie-caption');
      let src = item.getAttribute('data-src');
      if (!src && img && img.style.backgroundImage) {
        const m = img.style.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
        if (m) src = m[1];
      }
      if (src) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption ? caption.textContent : '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) closeLightbox();
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  // ---- Playlist : lecteur YouTube intégré ----
  const playlistPlayer = document.getElementById('playlist-player');
  const playlistIframe = document.getElementById('playlist-iframe');
  const playlistPlayerClose = playlistPlayer && playlistPlayer.querySelector('.playlist-player-close');

  document.querySelectorAll('.playlist-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const id = this.getAttribute('data-youtube-id');
      if (!id || !playlistIframe || !playlistPlayer) return;
      playlistIframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
      playlistPlayer.classList.add('open');
      playlistPlayer.setAttribute('aria-hidden', 'false');
    });
  });

  if (playlistPlayerClose) {
    playlistPlayerClose.addEventListener('click', function () {
      if (!playlistPlayer || !playlistIframe) return;
      playlistIframe.src = '';
      playlistPlayer.classList.remove('open');
      playlistPlayer.setAttribute('aria-hidden', 'true');
    });
  }

  // ---- Nav : masquer au scroll vers le bas ----
  let lastScrollY = window.scrollY;
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    const current = window.scrollY;
    if (current > lastScrollY && current > 200) {
      nav && nav.classList.add('hidden');
    } else {
      nav && nav.classList.remove('hidden');
    }
    lastScrollY = current;
  }, { passive: true });

  // ---- Init ----
  updateDaysCounter();
})();
