// Mobile nav toggle and simple interactions for the placeholder site
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#mobile_menu");
  const navList = document.querySelector(".nav__list");

  // Toggle mobile nav; update ARIA attributes for accessibility
  if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.classList.toggle("is-active");
      menuButton.setAttribute('aria-expanded', String(!expanded));
      navList.setAttribute('aria-hidden', String(expanded));
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menuButton.classList.remove('is-active');
        menuButton.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Smooth scroll for internal anchors (only when target exists)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile nav after navigation
          if (navList && navList.getAttribute('aria-hidden') === 'false') {
            navList.setAttribute('aria-hidden', 'true');
            if (menuButton) {
              menuButton.classList.remove('is-active');
              menuButton.setAttribute('aria-expanded', 'false');
            }
          }
        }
      }
    });
  });

  // Contact form handler (no network) — shows a fake success state
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill out all fields.';
        status.classList.add('error');
        return;
      }

      // emulate async send
      status.textContent = 'Sending...';
      status.classList.remove('error');
      setTimeout(() => {
        status.textContent = 'Thanks — your message was received (placeholder).';
        form.reset();
      }, 800);
    });
  }
});
