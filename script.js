const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const moonIcon = document.querySelector('.moon');
const sunIcon = document.querySelector('.sun');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  })
);


const themeSwitch = document.querySelector('#switch');
const html = document.querySelector('html');


const setTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  themeSwitch.checked = theme === 'dark';
};


const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Event listener for theme switcher
themeSwitch.addEventListener('change', () => {
  const selectedTheme = themeSwitch.checked ? 'dark' : 'light';
  setTheme(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
});

moonIcon.addEventListener('click', () => {
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
});

sunIcon.addEventListener('click', () => {
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
});