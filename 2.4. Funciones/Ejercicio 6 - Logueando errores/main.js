"use strict";

// Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:
// Al recoger el elemento de HTML vamos a guardarlo en una constante. Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
// Finalmente tras nuestro condicional retornaremos la constante con el elemento.
// Nota: podemos imprimir/loguear errores con console.error().

function getEl(x) {
  const get = document.querySelector(x);

  if (get === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
  } else {
    console.log(get);
  }
  return get;
}

getEl(".test");
