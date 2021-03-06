"use strict";

const pearBasket = {
  maxpear: 10,
  minpear: 1,
  numberpear: 4,
  initialnumberpear: 2
};

// Añadir al cesto una pera

pearBasket.addPear = function() {
  return pearBasket.numberpear + 1;
};

console.log(pearBasket.addPear());

// Sacar del cesto una pera
pearBasket.removePear = function() {
  return pearBasket.numberpear - 1;
};

console.log(pearBasket.removepear());

// Restablecer el número de peras al valor inicial.

pearBasket.initialbasketpear = function() {
  return pearBasket.initialnumberpear;
};

console.log(pearBasket.initialbasketpear());
