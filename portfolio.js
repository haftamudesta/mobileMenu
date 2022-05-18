const hambergur = document.querySelector('.allign');
const contacts = document.querySelector('.contacts');
const closes = document.querySelector('.close');
const main = document.querySelector('.main');
hambergur.addEventListener('click', () => {
  hambergur.classList.toggle('close');
  closes.style.display = 'block';
  hambergur.style.display = 'none';
  contacts.style.display = 'block';
  main.style.opacity = '0';
});

closes.addEventListener('click', () => {
  closes.classList.toggle('allign');
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.style.display = 'none';
  main.style.opacity = '1';
});
contacts.addEventListener('click', () => {
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.style.display = 'none';
  main.style.opacity = '1';
});
document.querySelectorAll('.nav-links').forEach(e => e.addEventListener('click', () => {
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.style.display = 'none';
  main.style.opacity = '1';
}));
