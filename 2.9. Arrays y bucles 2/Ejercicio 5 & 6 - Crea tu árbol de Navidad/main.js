"use strict";
// Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:

const main = document.querySelector(".main");
function makeStar() {
  let star = document.createElement("p");
  star.classList.add("star");
  star.innerText = "★";
  main.appendChild(star);
}

function makeTree(treeHeigth) {
  let treeWidth = "▲";
  let treeComponent = "▲";
  for (let i = 0; i < treeHeigth; i++) {
    let treeLine = document.createElement("p");
    treeLine.innerText = treeWidth;
    main.appendChild(treeLine);
    treeWidth = treeWidth + treeComponent;
  }
}

function makeTrunk() {
  let trunk = document.createElement("p");
  trunk.classList.add("trunk");
  trunk.innerText = "|";
  main.appendChild(trunk);
}

makeStar();
makeTree(5);
makeTrunk();
