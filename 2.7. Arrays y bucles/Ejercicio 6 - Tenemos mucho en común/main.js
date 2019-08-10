"use strict";

const getBooks = function(ev) {
  ev.preventDefault();
  const books = [];
  const book1 = document.querySelector(".js-book1");
  const book2 = document.querySelector(".js-book2");
  books[0] = book1.value;
  books[1] = book2.value;
  // books.push(book1.value);
  debugger;
};
const button = document.querySelector(".js-button");
button.addEventListener("click", getBooks);

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario.

// const bestFilms = [
//   "Zootopia",
//   "Kubo and the Two Strings",
//   "La tortue rouge",
//   "Ma vie de Courgette",
//   "Moana"
// ];

// // Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

// for (const movie of bestFilms) {
//   console.log(`"${movie}" Tenemos mucho en común, humana.`);
// }
