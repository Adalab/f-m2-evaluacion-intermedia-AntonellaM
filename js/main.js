'use strict';

const randomNumber = randomNum(100);
const numberEl = document.querySelector('.number__input');
const buttonEl = document.querySelector('.number__submit');
const clueEl =  document.querySelector('.clue');
const contEl = document.querySelector('.counter');
let counter = 0;

console.log(randomNumber);

function randomNum() {
    return Math.ceil(Math.random() * 100);
}

function clueText(text) {
    clueEl.innerHTML = text;
}

function checkNumber () {
    let comparedNumber = parseInt(numberEl.value);
    if (comparedNumber === randomNumber) {
        clueText("¡HAS GANADO, CAMPEONA!");
    } else if (comparedNumber > randomNumber) {
        clueText("Prueba un número más bajo");
    } else if (comparedNumber < randomNumber) {
        clueText("Prueba un número más alto");
    } else {
        clueText("Escribe un número y dale a prueba");
    }
}

function buttonClickHandler(event) {
    event.preventDefault();
    counter += 1;
    contEl.innerHTML = `${counter}`;
    checkNumber();
}

buttonEl.addEventListener('click', buttonClickHandler);