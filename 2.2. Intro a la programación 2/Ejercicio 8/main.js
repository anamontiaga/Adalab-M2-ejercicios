"use strict";

const firstDogImage = 'https://www.patatero.com/wp-content/uploads/2015/05/551_i0wBX0_Iui.jpeg';

const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.list1');

listElement.innerHTML = `<img src="${firstDogImage}"> ${firstDogName}`;

