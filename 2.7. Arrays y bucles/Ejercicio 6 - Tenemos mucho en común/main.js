"use strict";

const getBooks = ev => {
  ev.preventDefault();
  const books = [];
  const book1 = document.querySelector(".js-book1");
  const book2 = document.querySelector(".js-book2");
  books[0] = book1.value;
  books[1] = book2.value;
  for (const book of books) {
    console.log(`¡A mí también me encantó ${book}! Tenemos mucho en común, humana.`);
  }
};
const btn = document.querySelector(".js-button");
btn.addEventListener("click", getBooks);

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.
