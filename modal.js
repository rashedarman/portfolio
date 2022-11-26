const projectData = [
  {
    title: 'Keeping track of hundreds of components 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    title: 'Keeping track of hundreds of components 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    title: 'Keeping track of hundreds of components 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    title: 'Keeping track of hundreds of components 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    title: 'Keeping track of hundreds of components 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    title: 'Keeping track of hundreds of components 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButtons = document.querySelectorAll('.close-popup');

const popupModal = document.querySelector('.popup-modal');

openPopupButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // add image
    document.querySelector('.popup-img').src = projectData[index].image;

    // add title
    if (!document.querySelector('.popup-card .title > h3')) {
      const titleEl = document.createElement('h3');
      titleEl.textContent = projectData[index].title;
      document.querySelector('.popup-card .title').appendChild(titleEl);
    }

    // add description
    if (!document.querySelector('.popup-card .details > p')) {
      const descriptionEl = document.createElement('p');
      descriptionEl.textContent = projectData[index].description;
      document.querySelector('.popup-card .details').appendChild(descriptionEl);
    }

    // add tags
    if (!document.querySelector('.popup-card .tag-container li')) {
      projectData[index].technologies.forEach((val) => {
        const li = document.createElement('li');
        li.classList.add('tag');
        li.textContent = val;
        document.querySelector('.popup-card .tag-container').appendChild(li);
      });
    }

    // add links
    const actions = document.querySelector('.popup-actions');
    actions.children[0].href = projectData[index].live;
    actions.children[1].href = projectData[index].source;

    popupModal.classList.add('show-popup');
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popupModal.classList.remove('show-popup');
  });
});
