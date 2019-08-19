"use strict";

// Dado el siguiente array:
// Escribid un script que recorra los datos de este array y pinte en consola por cada elemento: "El dato VALOR está en la posición X y es de tipo TIPO".
// Por ejemplo "El dato Ada está en la posición 0 y es de tipo string".

const items = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron"
  }
];

function array(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`El dato ${items[i]} está en la posición ${i} y es de tipo ${typeof items[i]}`);
  }
}

console.log(array(items));
