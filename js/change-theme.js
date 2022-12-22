const page = document.querySelector('.page');
const buttonDark = document.querySelector('.theme-button-dark');
const buttonLight = document.querySelector('.theme-button-light');

buttonDark.onclick = function () {
    page.classList.add('dark');
    buttonLight.classList.remove('active');
    buttonDark.classList.add('active');
};

buttonLight.onclick = function () {
    page.classList.remove('dark');
    buttonDark.classList.remove('active');
    buttonLight.classList.add('active');
};


const buttonSansSerif = document.querySelector('.font-button-sans-serif');
const buttonSerif = document.querySelector('.font-button-serif');

buttonSerif.onclick = function () {
    page.classList.add('serif');
    buttonSansSerif.classList.remove('active');
    buttonSerif.classList.add('active');
}

buttonSansSerif.onclick = function () {
    page.classList.remove('serif');
    buttonSerif.classList.remove('active');
    buttonSansSerif.classList.add('active');
};