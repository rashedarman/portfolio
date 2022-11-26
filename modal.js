const projectData = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: '',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButtons = document.querySelectorAll('.close-popup');

const popupModal = document.querySelector('.popup-modal');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popupModal.classList.add('show-popup');
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popupModal.classList.remove('show-popup');
  });
});
