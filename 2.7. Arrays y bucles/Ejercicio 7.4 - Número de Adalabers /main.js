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

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners(contacts) {
  let designers = 0;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].job === "diseñadora") {
      designers = designers + 1;
    }
  }
  return designers;
}

console.log(countDesigners(contacts));
