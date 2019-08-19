"use strict";

// Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.

// el primero será un booleano para especificar si es border-box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.

const getEl = (borderBox, totalBoxWidth, padd, borSize) => {
  let borderBox;
  let totalContentWidth;
  if (borderBox) {
    totalContentWidth = totalBoxWidth + borSize * 2;
  } else {
    totalContentWidth = totalBoxWidth;
  }

  return totalContentWidth;
};

getEl(borderBox, 34, 0, 2);
