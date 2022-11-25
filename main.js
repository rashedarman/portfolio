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

contactForm.addEventListener('keyup', () => {
  const nameInput = contactForm.elements.name;
  const emailInput = contactForm.elements.email;
  const messageInput = contactForm.elements.message;

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
});

// retrieve saved (if any) form data and pre-fill the inputs
if (localStorage.getItem('formData')) {
  const formData = JSON.parse(localStorage.getItem('formData'));

  Object.keys(formData).forEach((key) => {
    contactForm.elements[key].value = formData[key];
  });
}
