const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

const saved = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', saved);
btn.textContent = saved === 'light' ? '🌞' : '🌙';

btn.onclick = () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.textContent = next === 'light' ? '🌞' : '🌙';
};
