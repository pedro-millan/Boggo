const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function setCurrentNav() {
  const page = document.body.dataset.page;
  $$('[data-nav]').forEach(link => {
    if (link.dataset.nav === page) link.classList.add('active');
  });
}

function menuToggle() {
  const btn = $('.menu-toggle');
  const nav = $('.site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });
}

function renderFeatured() {
  const holder = $('#featured-products');
  if (!holder || typeof BOGGO_MENU === 'undefined') return;
  const picks = [
    BOGGO_MENU[0].products[0],
    BOGGO_MENU[2].products[2],
    BOGGO_MENU[3].products[0],
    BOGGO_MENU[1].products[0]
  ];
  holder.innerHTML = picks.map(productCard).join('');
}

function productCard(product) {
  return `
    <article class="product-card reveal">
      <figure class="product-card__image">
        <img src="assets/img/products/${product.image}" alt="${product.name}" loading="lazy">
      </figure>
      <div class="product-card__body">
        <div class="product-card__topline">
          <h3>${product.name}</h3>
          <strong>${product.price}</strong>
        </div>
        <p>${product.desc}</p>
        <a class="small-link" href="reserva.html">Reservar mesa</a>
      </div>
    </article>`;
}

function renderCarta() {
  const menu = $('#menu-sections');
  const tabs = $('#category-tabs');
  if (!menu || typeof BOGGO_MENU === 'undefined') return;

  if (tabs) {
    tabs.classList.add('carta-lite-menu');
    tabs.innerHTML = BOGGO_MENU.map((section, index) => `
      <a href="#${section.slug}" class="carta-lite-link ${index === 0 ? 'active' : ''}">
        ${section.category}
      </a>
    `).join('');
  }

  menu.innerHTML = BOGGO_MENU.map(section => `
    <section class="menu-category" id="${section.slug}">
      <div class="section-heading left">
        <p class="eyebrow">Carta Boggo</p>
        <h2>${section.category}</h2>
        <p>${section.intro}</p>
      </div>
      <div class="product-grid">
        ${section.products.map(productCard).join('')}
      </div>
    </section>
  `).join('');
}

function reservationForm() {
  const form = $('#reservation-form');
  const result = $('#reservation-result');
  if (!form || !result) return;
  const date = $('#date');
  if (date) date.min = new Date().toISOString().split('T')[0];
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const reservations = JSON.parse(localStorage.getItem('boggoReservations') || '[]');
    reservations.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem('boggoReservations', JSON.stringify(reservations));
    result.innerHTML = `<strong>¡Reserva anotada!</strong><br>Te esperamos el ${data.date} a las ${data.time}. Recibirás confirmación por contacto del local.`;
    result.classList.add('show');
    form.reset();
  });
}


function merchImageFor(item) {
  const name = item.name.toLowerCase();
  if (name.includes('sticker')) return 'assets/img/club-stickers.jpg';
  if (name.includes('t-shirt') || name.includes('shirt') || name.includes('camiseta')) return 'assets/img/brand/BOGGO-44.webp';
  if (name.includes('gorra')) return 'assets/img/club-gorra.png';
  if (name.includes('lunchera')) return 'assets/img/club-lunchera.png';
  if (name.includes('tote') || name.includes('bolsa')) return 'assets/img/club-tote.png';
  if (name.includes('toalla')) return 'assets/img/club-toalla.png';
  return 'assets/img/boggo-footer-logo.webp';
}

function renderClub() {
  const holder = $('#merch-grid');
  if (!holder || typeof BOGGO_MERCH === 'undefined') return;
  holder.innerHTML = BOGGO_MERCH.map(item => {
    const image = merchImageFor(item);
    return `
      <article class="merch-card reveal">
        <figure class="merch-card__image">
          <img src="${image}" alt="${item.name}" loading="lazy">
        </figure>
        <div class="merch-card__badge">${item.points} pts</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </article>
    `;
  }).join('');

  const input = $('#ticket-amount');
  const points = $('#points-result');
  if (input && points) {
    const calc = () => {
      const value = Number(input.value || 0);
      const earned = Math.max(0, Math.round(value * 10));
      points.textContent = `${earned} puntos`;
    };
    input.addEventListener('input', calc);
    calc();
  }
}

function revealOnScroll() {
  const items = $$('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

setCurrentNav();
menuToggle();
renderFeatured();
renderCarta();
reservationForm();
renderClub();
revealOnScroll();


function initBoggoProductLightbox() {
  let lightbox = document.querySelector('.boggo-lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'boggo-lightbox';
    lightbox.innerHTML = `
      <div class="boggo-lightbox__content" role="dialog" aria-modal="true" aria-label="Imagen ampliada de producto">
        <button class="boggo-lightbox__close" type="button" aria-label="Cerrar imagen ampliada">×</button>
        <img src="" alt="">
        <div class="boggo-lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const modalImg = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.boggo-lightbox__caption');
  const closeBtn = lightbox.querySelector('.boggo-lightbox__close');

  const openLightbox = (img) => {
    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || 'Producto Boggo';
    caption.textContent = img.alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  document.addEventListener('click', (event) => {
    const img = event.target.closest('.product-card__image img, .product-card img, .merch-card__image img, .merch-card img');
    if (!img) return;
    event.preventDefault();
    openLightbox(img);
  });

  document.addEventListener('keydown', (event) => {
    const img = event.target.closest?.('.product-card__image img, .product-card img, .merch-card__image img, .merch-card img');
    if (!img) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(img);
    }
  });

  document.querySelectorAll('.product-card__image img, .product-card img, .merch-card__image img, .merch-card img').forEach(img => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Ampliar imagen de ${img.alt || 'producto Boggo'}`);
  });
}

initBoggoProductLightbox();


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carta-lite-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.carta-lite-link').forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.boggo-lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.className = 'boggo-lightbox';
    lightbox.innerHTML = `
      <div class="boggo-lightbox__content" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
        <button class="boggo-lightbox__close" type="button" aria-label="Cerrar imagen ampliada">×</button>
        <img src="" alt="">
        <div class="boggo-lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  document.querySelectorAll('.merch-card__image img, .merch-card img').forEach(img => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Ampliar imagen de ${img.alt || 'recompensa Boggo'}`);
  });
});


function navbarScrollBehavior() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y < 80) {
      header.classList.remove('site-header--hidden');
    } else if (y < lastY) {
      header.classList.remove('site-header--hidden');
    } else if (y > lastY + 5) {
      header.classList.add('site-header--hidden');
      const nav = document.querySelector('.site-nav');
      const btn = document.querySelector('.menu-toggle');
      if (nav?.classList.contains('open')) {
        nav.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
        btn?.classList.remove('open');
      }
    }

    lastY = y;
  }, { passive: true });
}

function initRevealVariants() {
  const items = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  if (!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
}

function improveMenuA11y() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!btn || !nav) return;
  if (!nav.id) nav.id = 'site-navigation';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'site-navigation');

  btn.addEventListener('click', () => {
    const nowOpen = nav.classList.contains('open');
    btn.setAttribute('aria-expanded', String(nowOpen));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}

navbarScrollBehavior();
initRevealVariants();
improveMenuA11y();
