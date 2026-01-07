const langBtn = document.getElementById('lang-toggle');
const path = location.pathname;
const lang = localStorage.getItem('lang') || 'en';

langBtn.textContent = lang.toUpperCase();

if (lang === 'it' && !path.startsWith('/it')) {
  location.pathname = '/it' + path;
}

langBtn.onclick = () => {
  const next = lang === 'en' ? 'it' : 'en';
  localStorage.setItem('lang', next);
  location.pathname = next === 'it' ? '/it' + path : path.replace('/it', '');
};
