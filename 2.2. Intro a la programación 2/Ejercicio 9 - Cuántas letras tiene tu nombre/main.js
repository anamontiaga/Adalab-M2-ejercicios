"use strict";
// Con todo lo aprendido hasta ahora vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres, remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.

const name = "Leticia Fernández Sánchez";

const text = document.querySelector(".text");

text.innerHTML = `El nombre de mi compañera es ${name}, y está compuesto por  ${name.length} caracteres`;
