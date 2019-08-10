"use strict";

// function getNameLuke() {
//   fetch("https://swapi.co/api/people/1")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       document.body.innerHTML = data.name;
//     });
// }

// document.body.addEventListener("click", getNameLuke());

function getFilmANewHope() {
  fetch("https://swapi.co/api/films")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.body.innerHTML = data.characters;
    });
}

document.body.addEventListener("click", getFilmANewHope());

// A la URL base (https://api.rand.fun/) le hemos añadido '/games/rockpaperscissorslizardspock' para pedir un emoji aleatorio.

// Al ejecutar fetch(URL), este método devuelve una promesa, es decir, algo sobre lo que podemos hacer .then()
