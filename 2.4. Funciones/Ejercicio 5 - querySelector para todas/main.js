"use strict";

// Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Haz una función llamada getEl.

// Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así: const btnEl = getEl(".btn");

function getEl(x) {
  const get = document.querySelector(x);
  return get;
}

console.log(getEl(".test").innerHTML);
