"use strict";
// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz

const adalaber1 = {
  name: "Susana",
  age: 34,
  profession: "periodista"
};

console.log(`${adalaber1.name}, ${adalaber1.age} años, ${adalaber1.profession}`);

// La consola me pinta: "Susana, 34 años, periodista"

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actriz"
};

console.log(`${adalaber2.name}, ${adalaber2.age} años, ${adalaber2.profession}`);

// La consola me pinta: "Rocío, 25 años, actriz"

// EXTRA: Creando objetos desde 0 y objetos dentro de objetos.
const adalaber3 = {};
adalaber3.name = "Ana";
adalaber3.age = 18;
adalaber3.job = {};
adalaber3.job.name = "Frontend Developer";
adalaber3.job.type = "Tech";

console.log(adalaber3);
