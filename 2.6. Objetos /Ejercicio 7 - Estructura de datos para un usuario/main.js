"use strict";

// Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:
// Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
// Añadiremos una propiedad llamada firstName y le asignaremos un valor.
// Añadiremos una propiedad llamada lastName y le asignaremos un valor.
// Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
// Añadiremos una propiedad job a la que asignaremos el valor de la constante job
// Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
// Cambiaremos el nombre del usuario por otro distinto
// Aumentaremos en 1 la edad del usuario
// Comprobaremos de nuevo que todo sigue funcionando correctamente

const user = {};
const job = "developer";

user.firstName = "Ana";
user.lastName = "Montiaga";
user.age = "36";
user.job = `${job}`;

user.firstName = "María";
user.age = parseInt(`${user.age}`) + 1;

console.log(user);
