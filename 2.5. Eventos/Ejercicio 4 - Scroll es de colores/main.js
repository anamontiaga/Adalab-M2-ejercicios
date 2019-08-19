"use strict";

const content = document.querySelector(".content");

// handler
function changeColor() {
  if (window.scrollY >= 250) {
    content.style = "background-color: green;";
  } else {
    content.style = "background-color: red;";
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener("scroll", changeColor);
