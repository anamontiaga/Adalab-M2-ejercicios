"use strict";
// Sin modificar estas dos funciones, vamos a hacer lo siguiente:
// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
// convertimos ese valor a número y lo asignamos a una constante
// usamos nuestra función del ejercicio 4 para saber si es par o impar
// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

function getEl(x) {
  const get = document.querySelector(x);

  if (get === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
  } else {
    console.log(get);
  }
  return get;
}

getEl(".hola");

const parseGet = parseInt(getEl(".hola").innerHTML);

function evenOdd(a) {
  if (a % 2 === 0) {
    console.log(`Este número es PAR: ${a}`);
  } else {
    console.log(`Este número es IMPAR: ${a}`);
  }
}

evenOdd(parseGet);
