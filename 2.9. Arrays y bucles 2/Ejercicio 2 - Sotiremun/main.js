"use strict";

// Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
var numbers = [];

function get100Numbers() {
  for (let i = 0; i < 100; i = i + 1) {
    numbers.push(i + 1);
  }
  console.log(numbers);
}

get100Numbers();

function getReversed100Numbers() {
  console.log(numbers.reverse());
}

getReversed100Numbers();
