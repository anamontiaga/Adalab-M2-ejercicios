"use strict";

// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript: (...)

// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.

const goBtn = document.querySelector(".js-go-button");
const list = document.querySelector(".js-list");
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

function appearList() {
  list.innerHTML = `<li class="inception">${inception}</li><li class="the-butterfly-effect">${theButterFlyEffect}</li><li class="eternal-sunshine-of-the-sm">${eternalSunshineOfTheSM}</li><li class="blue-velvet">${blueVelvet}</li><li class="split">${split}</li>`;

  const inceptionList = document.querySelector(".inception");
  const theButterFlyEffectList = document.querySelector(".the-butterfly-effect");
  const eternalSunshineOfTheSMList = document.querySelector(".eternal-sunshine-of-the-sm");
  const blueVelvetList = document.querySelector(".blue-velvet");
  const splitList = document.querySelector(".split");

  function appearFilmOnConsole(event) {
    const selectedFilm = event.currentTarget;
    console.log(selectedFilm.innerHTML);
  }

  inceptionList.addEventListener("click", appearFilmOnConsole);
  theButterFlyEffectList.addEventListener("click", appearFilmOnConsole);
  eternalSunshineOfTheSMList.addEventListener("click", appearFilmOnConsole);
  blueVelvetList.addEventListener("click", appearFilmOnConsole);
  splitList.addEventListener("click", appearFilmOnConsole);
}

goBtn.addEventListener("click", appearList);
