/** @jest-environment jsdom */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('basic UI behavior', () => {
  let window;
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    // require the app script after the DOM is loaded
    jest.isolateModules(() => {
      require('../app.js');
    });
  });

  test('menu button toggles nav active class and aria attributes', () => {
    const menu = document.getElementById('mobile_menu');
    const nav = document.querySelector('.nav__list');
    expect(menu).not.toBeNull();
    expect(nav).not.toBeNull();

    // initial state
    expect(menu.getAttribute('aria-expanded')).toBe('false');

    // click to open
    menu.click();
    expect(menu.classList.contains('is-active')).toBe(true);
    expect(nav.classList.contains('active')).toBe(true);
    expect(menu.getAttribute('aria-expanded')).toBe('true');

    // click to close
    menu.click();
    expect(menu.classList.contains('is-active')).toBe(false);
    expect(nav.classList.contains('active')).toBe(false);
    expect(menu.getAttribute('aria-expanded')).toBe('false');
  });

  test('contact form validation shows message when empty', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    expect(form).not.toBeNull();
    expect(status).not.toBeNull();

    // submit empty
    form.dispatchEvent(new window.Event('submit'));
    expect(status.textContent).toMatch(/Please fill out all fields/);
  });
});
