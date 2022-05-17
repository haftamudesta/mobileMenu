const hambergur = document.querySelector('.allign');
const contacts = document.querySelector('.contacts');
const closes = document.querySelector('.close');
const symbols = document.querySelector('.symbols');
const time = document.querySelector('.time');
const links = document.querySelector('.links');
hambergur.addEventListener('click', () => {
  hambergur.classList.toggle('close');
  closes.style.display = 'block';
  hambergur.style.display = 'none';
  contacts.style.display = 'flex';
  contacts.style.marginTop = '-60px';
  contacts.style.marginLeft = '150px';
  contacts.style.flexDirection = 'column';
  contacts.style.textDocaration = 'none';
  contacts.style.color = 'white';
  contacts.style.position = 'absolute';
  contacts.style.fontSize = '12px';
  symbols.style.display = 'none';
  time.style.display = 'none';
  links.style.textDecoration = 'none';
});

closes.addEventListener('click', () => {
  closes.classList.toggle('allign');
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.classList.remove('active');
  contacts.style.marginTop = '-600px';
});

contacts.forEach().addEventListener('click', () => {
  contacts.style.marginTop = '-600px';
  contacts.style.display = 'none';
  closes.style.display = 'none';
  hambergur.style.display = 'block';
});
