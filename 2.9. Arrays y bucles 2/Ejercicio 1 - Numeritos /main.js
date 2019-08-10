"use strict";

// Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

// function get100Numbers() {
//   for (let i = 1; i < 101; i = i + 1) {
//     // bucle que recorre el array
//     console.log(i);
//   }
// }

// get100Numbers();

var numbers = [];

function get100Numbers() {
  for (let i = 0; i < 100; i = i + 1) {
    numbers.push(i + 1);
  }
  console.log(numbers);
}

get100Numbers();
