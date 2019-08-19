"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Crear un nuevo array que contiene solo los números pares que hay en lostNumbers.
// Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.

const evenNumbers = [];

for (let i = 0; i < lostNumbers.length; i = i + 1) {
  if (lostNumbers[i] % 2 === 0) {
    evenNumbers.push(lostNumbers[i]);
  }
}
console.log(evenNumbers);

// Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.

const multipleOfThreeNumbers = [];

for (let i = 0; i < lostNumbers.length; i = i + 1) {
  if (lostNumbers[i] % 3 === 0) {
    multipleOfThreeNumbers.push(lostNumbers[i]);
  }
}
console.log(multipleOfThreeNumbers);

//Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.

const result = evenNumbers.concat(multipleOfThreeNumbers);
console.log(result);
