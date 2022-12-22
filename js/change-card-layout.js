const cards = document.querySelector('.cards');
const buttonGrid = document.querySelector('.card-view-button-grid');
const buttonList = document.querySelector('.card-view-button-list');

buttonList.onclick = function () {
    cards.classList.add('list');
    buttonGrid.classList.remove('active');
    buttonList.classList.add('active');
};

buttonGrid.onclick = function () {
    cards.classList.remove('list');
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
};