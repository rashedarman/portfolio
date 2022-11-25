const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu > a');

openBtn.addEventListener('click', () => {
  navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});
