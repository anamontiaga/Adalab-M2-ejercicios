"use strict";

// Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos: Nombre, Apellidos, Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono.
// Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.

const arr = [
  { nombre: "Ana", apellidos: "Montiaga", telefono: "665284612" },
  { nombre: "Laura", apellidos: "Ansótegui", telefono: "678905643" },
  { nombre: "Estonia", apellidos: "Larrañaga", telefono: "654236781" }
];

const inputName = document.querySelector(".name");
const inputSurname = document.querySelector(".surname");
const inputTel = document.querySelector(".tel");
const select = document.querySelector(".select");

function fillForm() {
  event.preventDefault();
    for (let i = 0; i < arr.length; i = i + 1) {
      if (arr[i].nombre === select.value) {
      inputName.value = arr[i].nombre;
      inputSurname.value = arr[i].apellidos;
      inputTel.value = arr[i].telefono;
    }
  }
}

// fillForm();
select.addEventListener("change", fillForm);
