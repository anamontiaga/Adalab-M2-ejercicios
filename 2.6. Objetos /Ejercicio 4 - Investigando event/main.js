"use strict";
// elemento de HTML
const button = document.querySelector(".btn");

function handButtonClick(event) {
  console.log(event);
}

button.addEventListener("click", handButtonClick);
