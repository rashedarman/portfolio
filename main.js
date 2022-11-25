const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
