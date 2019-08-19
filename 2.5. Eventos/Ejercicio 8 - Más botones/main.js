"use strict";

// Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.
// Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.

const buttonEl = document.getElementById("js-button");
const buttonEl2 = document.getElementById("js-button-2");

function changeButton(ev) {
  ev.preventDefault();
  event.currentTarget.classList.toggle("red");
}

buttonEl.addEventListener("click", changeButton);
buttonEl2.addEventListener("click", changeButton);
