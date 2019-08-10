"use strict";

// Declaramos la array
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let totalScore = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // totalScore += scores[i] es igual a totalScore= totalScore + scores[i]
}

console.log("La puntuación final es " + totalScore);

// La consola me pinta `La puntuación final es 59`
