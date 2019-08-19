"use strict";

// elemento de HTML
const paragraphElement = document.querySelector(".loren");

// handler
function addParagraph() {
  paragraphElement.innerHTML = `${paragraphElement.innerHTML} <p> ${paragraphElement.innerHTML}</p>`;
}

paragraphElement.addEventListener("mouseover", addParagraph);
