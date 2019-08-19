"use strict";

// El objetivo de este ejercicio es pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:

const firstDogImage = "https://www.patatero.com/wp-content/uploads/2015/05/551_i0wBX0_Iui.jpeg";

const firstDogName = "Dina";

const secondDogImage = "https://www.hogarmania.com/archivos/201404/deko-mascotas-528-perro-boxer-blanco-de-piel-sensible-xl-668x400x80xX.jpg";
const secondDogName = "Luna";

const thirdDogImage = "https://i.pinimg.com/originals/c4/2b/01/c42b01e1e70eea894fdef1162500adce.jpg";
const thirdDogName = "Lana";

const listElement = document.querySelector(".list");

listElement.innerHTML = `<p>${firstDogName}</p><img src="${firstDogImage}"><p>${secondDogName}</p><img src="${secondDogImage}"><p>${thirdDogName}</p><img src="${thirdDogImage}">`;
