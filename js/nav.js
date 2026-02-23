/* ── nav.js: hamburger menu ── */
document.addEventListener('DOMContentLoaded', function () {
  const btn   = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-nav');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      btn.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
});
