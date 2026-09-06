// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Quote form -> WhatsApp
  const form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const vehicle = (data.get('vehicle') || '').toString().trim();
      const wrapType = (data.get('wrapType') || '').toString();
      const finish = (data.get('finish') || '').toString();
      const notes = (data.get('notes') || '').toString().trim();

      let text = `Hello! I'm interested in a car wrap quote.\n`;
      text += `Name: ${name}\n`;
      text += `Phone: ${phone}\n`;
      if (vehicle) text += `Vehicle: ${vehicle}\n`;
      if (wrapType) text += `Wrap type: ${wrapType}\n`;
      if (finish) text += `Finish: ${finish}\n`;
      if (notes) text += `Details: ${notes}\n`;

      const url = `https://wa.me/254704270724?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener');
    });
  }
});
