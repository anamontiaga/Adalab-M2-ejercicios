"use strict";

// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.

// Nota: el objetivo es hacerlo utilizando event.currentTarget.
const input = document.querySelector(".js-input");

function writeText() {
  const input = event.currentTarget; // No hacía falta
  const parragraph = document.querySelector(".js-parragraph");
  parragraph.innerHTML = input.value;
}

input.addEventListener("keydown", writeText);
