"use strict";

const userAvatarImg = document.querySelector(".user__avatar");

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// // avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';

let userAvatar = "http://www.fillmurray.com/300/300";

const userAvatarSrc = userAvatar || DEFAULT_AVATAR;

userAvatarImg.src = userAvatarSrc;
