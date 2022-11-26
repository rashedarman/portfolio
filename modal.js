const projectData = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint fugiat blanditiis, quo aperiam, vel maxime rerum sunt dignissimos, dolorem tenetur id! Exercitationem magnam unde veniam id molestiae totam! ',
    image: './assets/popup-image.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
];

const popupModal = document.querySelector('.popup-modal');
const portfolioCards = document.getElementById('portfolio-cards');

// dynamically create project cards
projectData.forEach((data) => {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const cardImg = document.createElement('img');
  cardImg.src = data.image;

  cardDiv.appendChild(cardImg);

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = data.title;

  const tagContainerUl = document.createElement('ul');
  tagContainerUl.className = 'tag-container';

  data.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.className = 'tag';
    li.textContent = technology;
    tagContainerUl.appendChild(li);
  });

  const openPopupBtn = document.createElement('button');
  openPopupBtn.textContent = 'See Project';
  openPopupBtn.classList.add('btn-primary', 'open-popup');

  cardDetails.appendChild(cardTitle);
  cardDetails.appendChild(tagContainerUl);
  cardDetails.appendChild(openPopupBtn);

  cardDiv.appendChild(cardDetails);

  portfolioCards.appendChild(cardDiv);
});

const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButtons = document.querySelectorAll('.close-popup');

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
