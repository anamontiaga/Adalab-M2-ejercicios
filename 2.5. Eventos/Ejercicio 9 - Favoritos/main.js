"use strict";

// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
// Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
// Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.

const isra = document.querySelector(".teacher--isra");
const carlos = document.querySelector(".teacher--tuerto");
const nasi = document.querySelector(".teacher--nasi");

function changeTarget(event) {
  event.currentTarget.classList.toggle("teacher--selected");
  if (event.currentTarget.querySelector(".favorite").innerHTML === "Añadir") {
    var add = event.currentTarget.querySelector(".favorite").innerHTML.replace("Añadir", "Quitar");
    event.currentTarget.querySelector(".favorite").innerHTML = add;
  } else {
    var remove = event.currentTarget.querySelector(".favorite").innerHTML.replace("Quitar", "Añadir");
    event.currentTarget.querySelector(".favorite").innerHTML = remove;
  }
}

isra.addEventListener("click", changeTarget);
carlos.addEventListener("click", changeTarget);
nasi.addEventListener("click", changeTarget);
