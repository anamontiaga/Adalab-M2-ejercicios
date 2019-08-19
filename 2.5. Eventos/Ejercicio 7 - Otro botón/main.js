"use strict";

// Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que:
// añadir la clase si no la tiene
// quitarla la clase si la tiene
// Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle

const buttonEl = document.getElementById("js-button");

function changeButton(ev) {
  ev.preventDefault();
  buttonEl.classList.toggle("red");
}

buttonEl.addEventListener("click", changeButton);
