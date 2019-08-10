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

// Una función theYoungest que devuelve el nombre de la adalaber más joven.
let minAge = 100;
debugger;
function theYoungest(minAge, contacts) {
  for (let i = 0; i < contacts.length; i++) {
    if (minAge > contacts[0].age) {
      minAge = contacts[0].age;
    }
  }
  return minAge;
}

console.log(theYoungest);
