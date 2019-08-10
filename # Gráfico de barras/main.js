"use strict";

// defino los inpus y las barras con querySelector querySelectorAll
const inputs = document.querySelectorAll(".js-input");

const bars = document.querySelectorAll(".js-bar");

// creo un bucle con i menor que el imput.lenght

function changeWidhtBar() {
  for (let i = 0; i < inputs.length; i++) {
    bars[i].style.width = `${inputs[i].value}%`; // el valor de los imputs lo paso a %
  }
}

// hago un bucle que escuche todos los imputs [1] y ejecute la funcion anterior con keyup

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", changeWidhtBar);
}
