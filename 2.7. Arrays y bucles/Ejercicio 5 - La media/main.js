"use strict";

// Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera
const numbers = [8, 10, 9, 8, 9];

// // Vamos a recorrer el array mediante un bucle para calcular la media de los números. Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media.
let totalScore = 0;

// for (let i = 0; i < numbers.length; i++) {
//   totalScore += numbers[i] / 5;
// }

// // Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
// console.log("La media de todas las puntuaciones es " + totalScore);

// Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

function average(a, b) {
  for (let i = 0; i < numbers.length; i++) {
    b += a[i];
    // b = b + a[1] Al b se le suma el siguiente número
  }
  return b / 6;

  // el último b que se suma en el bucle es el total
  // b es totalScore
  // a es numbers
}

console.log(average(numbers, totalScore));
// pinto la función dónde los parámetros son numbers y totalScore
