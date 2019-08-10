"use strict";

const contacts = [
  {
    name: "María",
    age: 29,
    job: "diseñadora"
  },
  {
    name: "Lucía",
    age: 29,
    job: "diseñadora"
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista"
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz"
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora"
  }
];

// Una función averageAge que devuelve la media de edad de listado.
let acumulator = 0;

function averageAge(obj, a) {
  for (let i = 0; i < contacts.length; i++) {
    a += obj[i].age;
  }
  return a / parseInt(contacts.length);
}

console.log(averageAge(contacts, acumulator));
