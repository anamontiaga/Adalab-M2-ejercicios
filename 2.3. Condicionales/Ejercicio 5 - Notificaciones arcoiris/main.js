"use strict";

const divSection = document.querySelector(".div-section");

const titleSelection = document.querySelector("h1");

const textSelection = document.querySelector("p");

// Si contiene la clase warning
if (divSection.classList.contains("warning")) {
  titleSelection.innerHTML = "AVISO";
  textSelection.innerHTML = "Tenga cuidado";
}
// Si contiene la clase error
else if (divSection.classList.contains("error")) {
  titleSelection.innerHTML = "ERROR";
  textSelection.innerHTML = "Ha surgido un error";
} // Si contiene la clase success
else if (divSection.classList.contains("success")) {
  titleSelection.innerHTML = "CORRECTO";
  textSelection.innerHTML = "Los datos son correctos";
}
