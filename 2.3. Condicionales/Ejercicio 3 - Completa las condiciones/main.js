"use strict";

const age = 51;

if (age === 0) {
  console.log("El número es 0");
} else if (age < 0) {
  console.log("El número es negativo");
} else if (age + 2 > 13 && age <= 20) {
  console.log("El número más 2 es: mayor 13 pero menor o igual que 20");
} else if (age >= 20 && age < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}
