"use strict";

function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.body.innerHTML = data.result;
    });
}

document.body.addEventListener("click", getEmoji());

// A la URL base (https://api.rand.fun/) le hemos añadido '/games/rockpaperscissorslizardspock' para pedir un emoji aleatorio.

// Al ejecutar fetch(URL), este método devuelve una promesa, es decir, algo sobre lo que podemos hacer .then()

// Cuando ejecute el método .then (), nos prometen que estarán esos datos en response.

// Al método .then () le pasamos una función -anónima o no-, que toma como parámetro el resultado de la promesa cuando esté resuelta (data)

// En este caso el parámetro response representa a la respuesta del servidor, y sobre él ejecutamos el método .json() que devuelve otra promesa.

//  este segundo then() le pasamos como parámetro otra función que toma como parámetro data que contiene el objeto que devuelve el servidor. En esta última función lo único que hacemos es, usando innerHTML sobre el body, añadir un emoji a la página.

// No olvidar hacer un return al final de la función que pasamos a then para encadenar con el siguiente then.
