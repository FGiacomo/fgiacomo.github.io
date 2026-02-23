---
title: "contacts"
url: "/it/contacts/"
---

<!-- <div class="prompt"><span>~</span> $ cat cv.md</div> -->

<div class="page-header">
  <div class="page-title">contacts</div>
</div>

<section class="section">
  <div class="section-title">links</div>
  <div class="contact-list">
    <a class="contact-row" href="mailto:tua@email.it">
      <div class="cr-icon">✉</div>
      <div class="cr-key">email</div>
      <div class="cr-value">tua@email.it</div>
      <div class="cr-arrow">→</div>
    </a>
    <a class="contact-row" href="https://github.com/fgiacomo" target="_blank">
      <div class="cr-icon">⌥</div>
      <div class="cr-key">github</div>
      <div class="cr-value">github.com/fgiacomo</div>
      <div class="cr-arrow">→</div>
    </a>
    <a class="contact-row" href="https://linkedin.com/in/fgiacomo" target="_blank">
      <div class="cr-icon">◈</div>
      <div class="cr-key">linkedin</div>
      <div class="cr-value">linkedin.com/in/fgiacomo</div>
      <div class="cr-arrow">→</div>
    </a>
  </div>
</section>

<section class="section">
  <div class="section-title">messaggio diretto</div>
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
    <button class="submit-btn" type="submit">send</button>
    <p class="form-note">// form gestito da <a href="https://formspree.io" target="_blank">Formspree</a>. Sostituisci YOUR_FORM_ID con il tuo endpoint.</p>
  </form>
</section>
