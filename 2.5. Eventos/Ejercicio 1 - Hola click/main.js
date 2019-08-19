"use strict";

// elemento de HTML
const button = document.querySelector(".click");
const parragraphElement = document.querySelector(".text");

// handler
function showText() {
  parragraphElement.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showText);
