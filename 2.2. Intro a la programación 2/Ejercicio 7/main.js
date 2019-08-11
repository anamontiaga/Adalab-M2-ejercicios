"use strict";

var name = 'Lola', verb = 'conocerte';

var presentation = `Hola ${name}, encantada de ${verb}.`;

var htmlToShow = `<p>
  ${presentation}</p>`;

var mainContent = document.getElementById('content');
mainContent.innerHTML = htmlToShow;