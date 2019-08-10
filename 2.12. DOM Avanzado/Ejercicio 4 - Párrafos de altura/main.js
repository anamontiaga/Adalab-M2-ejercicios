"use strict";

// Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos: Nombre, Apellidos, Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono.
// Vamos a crear un div en HTML que contenga tres párrafos con un texto aleatorio. Con la ayuda de JavaScript vamos a obtener su tamaño usando la propiedad offsetHeight. Posteriormente y usando el atributo HTML style vamos a configurar que su altura será un tercio de la actual.

const paragraphs = document.querySelector(".paragraphs");
paragraphs.style.height = "18px";
console.log(paragraphs.offsetHeight);
