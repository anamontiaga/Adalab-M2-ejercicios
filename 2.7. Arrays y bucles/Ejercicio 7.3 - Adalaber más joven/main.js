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

console.log(contacts.length);
// Una función theYoungest que devuelve el nombre de la adalaber más joven.

const theYoungest = arr => {
  let youngest = 100;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < youngest) {
      youngest = arr[i].age;
    } else {
      youngest = youngest;
    }
  }

  let name;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age === youngest) {
      name = arr[i].name;
    }
  }
  console.log(`La adalaber más joven tiene ${youngest} años y es ${name}`);
};

theYoungest(contacts);
