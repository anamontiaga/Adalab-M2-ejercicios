"use strict";

const userName = document.querySelector(".js-user_name");
const numberRepos = document.querySelector(".js-number_repos");
const imgAvatar = document.querySelector(".js-img_avatar");
const btn = document.querySelector(".js-btn");

function getGitHubData() {
  let input = document.querySelector(".js-input").value;
  fetch(`https://api.github.com/users/${input}`)
    .then(response => response.json())
    .then(data => {
      userName.innerHTML = data.name;
      numberRepos.innerHTML = data.public_repos;
      imgAvatar.src = data.avatar_url;
    });
}

btn.addEventListener("click", getGitHubData);

// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

// nombre
// número de repositorios
// avatar (imagen)
