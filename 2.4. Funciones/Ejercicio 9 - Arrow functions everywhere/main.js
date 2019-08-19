"use strict";

const getEl = x => {
  const get = document.querySelector(x);

  if (get === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
  } else {
    console.log(get);
  }
  return get;
};

getEl(".hola");

const parseGet = parseInt(getEl(".hola").innerHTML);

const evenOdd = a => {
  if (a % 2 === 0) {
    console.log(`Este número es PAR: ${a}`);
  } else {
    console.log(`Este número es IMPAR: ${a}`);
  }
};

evenOdd(parseGet);
