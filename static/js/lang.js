/* ── lang.js: auto-detect e switch lingua ── */
(function () {
  const path = window.location.pathname;
  if (path.startsWith('/it/') || path.startsWith('/en/')) return;

  const saved = localStorage.getItem('preferred-lang');
  if (saved) {
    window.location.replace('/' + saved + '/about/');
    return;
  }
  const lang = (navigator.language || 'it').toLowerCase().slice(0, 2);
  window.location.replace(lang === 'en' ? '/en/about/' : '/it/about/');
})();

function switchLang(lang) {
  localStorage.setItem('preferred-lang', lang);
  const parts = window.location.pathname.replace(/^\//, '').split('/');
  const page  = parts[1] || 'about';
  window.location.href = '/' + lang + '/' + page + '/';
}
