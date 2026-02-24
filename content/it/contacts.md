---
title: "contatti"
url: "/it/contacts/"
emoji: "✉️"
---

<div class="page-header">
  <div class="page-title">contacts<span class="cursor"></span></div>
</div>

<section class="section">
  <div class="section-title">links</div>
  <div class="contact-list">
    <a class="contact-row" href="mailto:giacomofantato@outlook.com">
      <div class="cr-icon">✉</div>
      <div class="cr-key">email</div>
      <div class="cr-value">giacomofantato@outlook.com</div>
      <div class="cr-arrow">→</div>
    </a>
    <a class="contact-row" href="https://github.com/fgiacomo" target="_blank">
      <div class="cr-icon">⌥</div>
      <div class="cr-key">github</div>
      <div class="cr-value">github.com/fgiacomo</div>
      <div class="cr-arrow">→</div>
    </a>
    <a class="contact-row" href="https://www.linkedin.com/in/giacomo-fantato/?locale=it-IT" target="_blank">
      <div class="cr-icon">◈</div>
      <div class="cr-key">linkedin</div>
      <div class="cr-value">linkedin.com/in/giacomo-fantato</div>
      <div class="cr-arrow">→</div>
    </a>
  </div>
</section>

<section class="section">
  <div class="section-title">messaggio diretto</div>
  <div id="form-success" style="display:none; color:var(--accent); font-size:13px; margin-bottom:16px;">✓ messaggio inviato con successo!</div>
  <form id="contact-form" action="https://formspree.io/f/mbdapboz" method="POST">
    <div class="form-group">
      <label>nome <span class="req">*</span></label>
      <input type="text" name="name" placeholder="Il tuo nome" required />
    </div>
    <div class="form-group">
      <label>email <span class="req">*</span></label>
      <input type="email" name="email" placeholder="tua@email.it" required />
    </div>
    <div class="form-group">
      <label>messaggio <span class="req">*</span></label>
      <textarea name="message" placeholder="Di cosa vuoi parlare?" required></textarea>
    </div>
    <div class="form-footer">
      <button class="submit-btn" type="submit">send</button>
      <span class="form-note">// i campi con <span class="req">*</span> sono obbligatori</span>
    </div>
  </form>
</section>

<script>
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('// errore: compila tutti i campi obbligatori.');
      return;
    }
  });
</script>