import validator from './validator.js';

console.log(validator);

const btnFormulario = document.querySelector('#btn-formulario');
const formulario = document.querySelector('#formulario-tarjeta');

btnFormulario.addEventListener('click', abrirFormulario);

function abrirFormulario() {
 btnFormulario.classList.toggle('active');   
formulario.classList.toggle('active');
};

/*Select generado-Mes*/
for( let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    formulario.SelectMes.appendChild(opcion);
}

/*Select generado-Año*/
const presentYear = new Date().getFullYear();
for( let i = presentYear; i <= presentYear + 7; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    formulario.SelectYear.appendChild(opcion);
}