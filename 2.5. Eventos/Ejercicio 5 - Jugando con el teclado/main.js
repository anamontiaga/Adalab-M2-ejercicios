"use strict";

function changeColor(event) {
  const key = event.key;

  if (key === "r") {
    document.body.style.backgroundColor = "red";
  } else if (key === "m") {
    document.body.style.backgroundColor = "purple";
  } else {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
  }
}

document.addEventListener("keydown", changeColor);
