"use strict";

// elemento de HTML
const button = document.querySelector(".click");

// handler
function showText(event) {
  event.preventDefault();
  const nameElement = document.querySelector(".name").value;
  console.log(`Hola ${nameElement}`);
}

button.addEventListener("click", showText);
