const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Take images
function imageMode(color) {
    image1.src = `img/proud_coder_${color}.svg`;
    image2.src = `img/feeling_proud_${color}.svg`;
    image3.src = `img/conceptual_idea_${color}.svg`;
}

function darkLightMode(THEME) {
    const isDarkMode = THEME === DARK_THEME;
    // Update background color
    nav.style.backgroundColor = isDarkMode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDarkMode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // Update toggle text and icon
    toggleIcon.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    isDarkMode ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // Update images 
    isDarkMode ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

function switchTheme(event) {
    // Switch to the dark theme
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        darkLightMode(DARK_THEME);
        // Switch to the light theme
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        darkLightMode(LIGHT_THEME);
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Take the Theme from Local Storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        darkLightMode(DARK_THEME);
    }
};