"use strict";

const age = document.querySelector('.age');

const total = document.querySelector('.total_hour');

const hourDay = 24;
const hourYear = hourDay * 365;

const totalHour = parseInt(age.innerHTML) * hourYear;

total.innerHTML = `Horas de vida: ${totalHour}`;

console.log(totalHour);
