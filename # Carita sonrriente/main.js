"use strict";

// elemento sobre el que haremos listener
const button = document.querySelector(".js-button");

// Me hago un handler con dos funciones: una que cambie la cara y otra que cambie el fondo (se llamara updatePage, porque updateFace + updateBackgroundColor= updatePage, ¿o no?).

const updatePage = function(ev) {
  ev.preventDefault();
  updateFace();
  updateBackgroundColor();
};

// declaro la función que cambia la cara
const updateFace = function() {
  // const select = document.querySelector(".js-select");
  // const faceValue = select.value;
  // const face = document.querySelector(".js-face");
  // face.innerHTML = faceValue;
  document.querySelector(".js-face").innerHTML = document.querySelector(
    ".js-select"
  ).value;
};

// declaro la función para obtener un número aleatorio que esté entre 1 y 100
const getRandomNumber = function() {
  return Math.floor(Math.random() * 100);
};

// declaro la función para obtener si un número es impar
const isOdd = function(number) {
  return number % 2 === 1;
};

// declaro la función que cambia el fondo
const updateBackgroundColor = function() {
  const randomNumber = getRandomNumber(); // nomeamos la función anteriormente declarada
  const container = document.querySelector(".js-container");
  container.classList.remove("correct-yellow-color", "chilean-fire-color"); // no entiendo por qué lo hace con remove
  if (isOdd(randomNumber)) {
    //cogemos las funciones que hemos declarado con su nombre en const
    container.classList.add("chilean-fire-color");
  } else {
    container.classList.add("correct-yellow-color");
  }
};

// listener al button para ejecutar la función que cambia la cara y el fondo.
button.addEventListener("click", updatePage);
