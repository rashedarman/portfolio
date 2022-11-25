const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu > a');
const contactForm = document.querySelector('.contact-form');

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

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // check if email is lower case
  const emailInput = contactForm.elements.email;
  const email = emailInput.value.trim();
  const msgField = emailInput.parentNode.querySelector('small');

  if (email.toLowerCase() === email) {
    contactForm.submit();
  } else {
    // error styling
    emailInput.style.border = '2px solid #fb4934';
    msgField.style.color = '#fb4934';
    msgField.textContent = 'Email must be all lowercase characters';
  }
});
