"use strict";

let dogAge = 4;
let dogHumanAge = 24 + (dogAge - 2) * 5;

if (dogAge === 1) {
  console.log("El perro tiene 15 años humanos");
} else if (dogAge > 1 && dogAge < 3) {
  console.log("El perro tiene 24 años humanos");
} else {
  console.log(`El perro tiene ${dogHumanAge} años humanos`);
}
