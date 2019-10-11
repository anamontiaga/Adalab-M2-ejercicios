"use strict";
// elemento de HTML
const films = ["Waking Life", "Apocalipsis Now", "El Padrino"];

films[3] = "Mujeres al borde de un ataque de nervios";
console.log(films);

films[3] = "Julieta";
console.log(films);

films[2] = "Que horas ela volta?";
console.log(films);

// vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecutamos la función para comprobar que se muestran los mensajes en la consola correspondientes.

const workWithMovies = () => {
  return films;
};

console.log(workWithMovies());
