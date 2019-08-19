"use strict";
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
// Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?

const adalaber1 = {};
adalaber1.name = "María";
adalaber1.age = 34;
adalaber1.profession = "periodista";
adalaber1.showBio = function() {
  return "Mi nombre es " + this.name + ", tengo " + this.age + "años y soy " + this.profession;
};

// Muestra en la consola: 'Mi nombre es María, tengo 34 años y soy periodista'
console.log(adalaber1.showBio());
