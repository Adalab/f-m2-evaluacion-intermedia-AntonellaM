'use strict';

console.log('Ready to go');

const randomNumber = randomNum(100);
const numberEl = document.querySelector('.number__input');
const buttonEl = document.querySelector('.number__submit');
const clueEl =  document.querySelector('.clue');
const contEl = document.querySelector('.counter');
console.log(numberEl, buttonEl, clueEl, contEl);

let counter = 0;

function randomNum() {
    return Math.ceil(Math.random() * 100);
}

function checkNumber () {
    let comparedNumber = parseInt(numberEl.value);
    if (comparedNumber === randomNumber) {
        clueEl.innerHTML = "¡HAS GANADO, CAMPEONA!"
    } else if (comparedNumber > randomNumber) {
        clueEl.innerHTML = "Prueba un número más bajo"
    } else if (comparedNumber < randomNumber) {
        clueEl.innerHTML = "Prueba un número más alto";
    } else {
        clueEl.innerHTML = "Escribe un número y dale a prueba";
    }
}

function buttonClickHandler(event) {
    event.preventDefault();
    checkNumber();
    counter += 1;
    contEl.innerHTML = `${counter}`;
}

buttonEl.addEventListener('click', buttonClickHandler);