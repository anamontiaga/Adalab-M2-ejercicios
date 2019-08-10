"use strict";

// Declaramos las constantes que recojan los elementos que queremos recoger
const form = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-name");
const surnameInput = document.querySelector(".js-surname");

// Recogemos los datos de Local Storage una vez almacenados, para que al logarnos aparezcan en el formulario. Antes pasamos los datos a objeto.
function getFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  nameInput.value = userData.name;
  surnameInput.value = userData.surname;
}

// Recogemos los datos con Local Storage en un solo objeto con todas las propiedades y los paso a string
function handleInput() {
  const data = {
    name: nameInput.value,
    surname: surnameInput.value
  };
  localStorage.setItem("userData", JSON.stringify(data));
}

// escucho al formulario para que cuando escriba se guarden los datos
form.addEventListener("keyup", handleInput);

// ejecuto la función
getFromLocalStorage();
