"use strict";

// Si no es bisisesto tiene que aparecer el siguiente año

function leapYear(leap) {
  if (leap % 4 === 0) {
    console.log(`${leap} es un año bisiesto`);
  } else if ((leap + 1) % 4 === 0) {
    console.log(`${leap + 1} será el próximo un año bisiesto`);
  } else if ((leap + 2) % 4 === 0) {
    console.log(`${leap + 2} eserá el próximo un año bisiesto`);
  } else {
    console.log(`${leap + 3} será el próximo un año bisiesto`);
  }
}

leapYear(2019);
