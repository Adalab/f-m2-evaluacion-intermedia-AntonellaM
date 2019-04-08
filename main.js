'use strict';

console.log('Ready to go');

//Crear un número aleatorio entre 1 y 100 y guardarlo en una constante. Puede ser constante porque se generará cada vez que recarguemos la página

function randomNum() {
    return Math.ceil(Math.random() * 100);
}

const randomNumber = randomNum(100);
console.log(randomNumber);

//Guardar el elemento input que contiene el número de la usuaria, el botón, el párrafo y el contador.

const numberEl = document.querySelector('.number__input');
const buttonEl = document.querySelector('.number__submit');
const clueEl =  document.querySelector('.clue');
const contEl = document.querySelector('.counter');
console.log(numberEl, buttonEl, clueEl, contEl);


const counter = {
    initial: 0,
    current: 0,
    min: 0,
    increase: function () {
        return this.current += 1;
    },
}


//La función sobre el botón realizará varias acciones
    //Comparar el número introducido por la usuaria con el número aleatorio generado
        //Si el número es menor, imprimir un mensaje en pantalla: "Prueba un número más alto"
        //Si el número es mayor, imprimir un mensaje en pantalla: "Prueba un número más bajo"
        //Si acierta, imprimir un mensaje en pantalla: "ERES UNA CAMPEONA!"
    //Accionar el contador y sumar uno cada vez que la usuaria pulse el botón

function buttonClickHandler(event) {
    event.preventDefault();
    console.log('Listener is working');
    console.log(numberEl.value);
    let comparedNumber = parseInt(numberEl.value);
    if (comparedNumber === randomNumber) {
        clueEl.innerHTML = "ERES UNA CAMPEONA!"
    } else if (comparedNumber > randomNumber) {
        clueEl.innerHTML = "Prueba un número más bajo"
    } else if (comparedNumber < randomNumber) {
        clueEl.innerHTML = "Prueba un número más alto";
    } else {
        clueEl.innerHTML = "Escribe un número y dale a prueba";
    }
    
    counter.increase();
    contEl.innerHTML = `${counter.current}`;

}

//Poner un lístener sobre el botón
buttonEl.addEventListener('click', buttonClickHandler);