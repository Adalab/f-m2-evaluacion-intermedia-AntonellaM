'use strict';

console.log('Ready to go');

//Crear un número aleatorio entre 1 y 100 y guardarlo en una constante. Puede ser constante porque se generará cada vez que recarguemos la página

function randomNum() {
    return Math.ceil(Math.random() * 100);
}

const randomNumber = randomNum(100);
console.log(randomNumber);

//Guardar el elemento input que contiene el número de la usuaria. 

const numberEl = document.querySelector('.number__input');
console.log(numberEl);

//La función sobre el botón realizará varias acciones
    //Comparar el número introducido por la usuaria con el número aleatorio generado
        //Si el número es menor, imprimir un mensaje en pantalla: "Prueba un número más alto"
        //Si el número es mayor, imprimir un mensaje en pantalla: "Prueba un número más bajo"
        //Si acierta, imprimir un mensaje en pantalla: "ERES UNA CAMPEONA!"
    //Accionar el contador y sumar uno cada vez que la usuaria pulse el botón


//Poner un lístener sobre el botón