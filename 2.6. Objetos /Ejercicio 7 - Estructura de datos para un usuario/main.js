"use strict";

// Objeto vacío
const user = {};

// Función
const infoUser = function(person, proprerty, value) {
  person[proprerty] = value;
};

infoUser(user, "job", "developer");

infoUser(user, "name", "Pepito");

console.log(user);
// Añadiremos una propiedad llamada firstName y le asignaremos un valor.
