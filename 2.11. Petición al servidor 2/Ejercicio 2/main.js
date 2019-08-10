"use strict";
const getCharacter = function() {
  let inputCharacter = document.querySelector(".character");
  inputCharacter = inputCharacter.value;
  return `https://swapi.co/api/people/?search=${inputCharacter}`;
};

const listCharacter = document.querySelector(".ul");

const getCharacterInfo = function() {
  fetch(`${getCharacter()}`)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        listCharacter.innerHTML += `<li>${data.results[i].name}</li><li>${
          data.results[i].gender
        }</li>`;
      }
    });
};

const btn = document.querySelector(".search");
btn.addEventListener("click", getCharacterInfo);
