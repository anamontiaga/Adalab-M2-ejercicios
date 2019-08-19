"use strict";

// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.

// Ejecútala e imprime el resultado para comprobar que funciona.

function evenOdd(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenOdd(23));
