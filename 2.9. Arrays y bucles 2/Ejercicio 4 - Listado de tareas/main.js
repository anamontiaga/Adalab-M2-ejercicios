"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];

// a) Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.

const task1 = document.querySelector(".task1");

if (tasks[0].completed === true) {
  task1.classList.add("crossed-task");
}

// b) Listado de tareas. Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

for (let i = 0; i < tasks.length; i = i + 1) {
  console.log(tasks[i].name);
}

const list = document.querySelector(".list");

const listContent = `<li>${tasks[i].name}</li>`;

list.innerHTML = listContent;

/////// ¿Quieren que meta contenido en el html, donde solo tengo una li?
