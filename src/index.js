import validator from './validator.js';

//const tarjetaNum2 = '46164460329936570';
//const isValid2 = validator.isValid(tarjetaNum2);
//const maskify2 = validator.maskify(tarjetaNum2);
//console.log(isValid2);
//console.log(maskify2)

//Declaro mis variables a trabajar
const btnFormulario = document.querySelector('#btn-formulario')
const formulario = document.querySelector('#formulario-tarjeta')
const datoNumero = document.querySelector('#tarjeta .numero')
const datoNombre = document.querySelector('#tarjeta .nombre')
const logoBanco = document.querySelector('#logo-banco')
const mesExpiracion = document.querySelector('#tarjeta #expiracion .mes')
const yearExpiracion = document.querySelector('#tarjeta #expiracion .year')
const codigoClave = document.querySelector('#tarjeta .ccv');
const btnRegistro = document.getElementById("btn-registro");

btnFormulario.addEventListener('click', abrirFormulario);

function abrirFormulario() {
  btnFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
}


/*Select generado-Mes___PRUEBA*/
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.textContent = i;
  formulario.SelectMes.appendChild(opcion);
}

/*Select generado-Año*/
const presentYear = new Date().getFullYear();
for (let i = presentYear; i <= presentYear + 7; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.textContent = i;
  formulario.SelectYear.appendChild(opcion);
}

//Para que sólo se escriban números en el input de NumeroTarjeta
//Accedo al valor de la techa presionada
formulario.NumeroTarjeta.addEventListener('keyup', (e) => {
  const valorIngresado = e.target.value;

  //Eliminar espacios en blanco y letras con expresiones regulares
  formulario.NumeroTarjeta.value = valorIngresado.replace(/\s/g, '').replace(/\D/g, '');

  //Mostrar el número escrito en el espacio 'p' de la tarjeta

  datoNumero.textContent = valorIngresado

  //Mostrar logo Visa o Mastercard
  if (valorIngresado[0] === '4') {
    logoBanco.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'https://aerolatinnews.com/wp-content/uploads/2017/11/visa.png'
    logoBanco.appendChild(imagen);
  } else if (valorIngresado[0] === '5') {
    logoBanco.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png'
    logoBanco.appendChild(imagen);
  }
})

//Para mostrar el nombre en la tarjeta 
formulario.NombreTarjeta.addEventListener('keyup', (e) => {
  const nombreIngresado = e.target.value;
  datoNombre.textContent = nombreIngresado;

})

//Mostrar fecha de Expiración
formulario.SelectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
})

formulario.SelectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value;
})

//Mostrar CCV
formulario.inputCCV.addEventListener('keyup', () => {
  formulario.inputCCV.value = formulario.inputCCV.value.replace(/\s/g, '').replace(/\D/g, '');
  codigoClave.textContent = formulario.inputCCV.value;
})

btnRegistro.addEventListener('click', () => {
  const tarjetaNum = document.getElementById("NumeroTarjeta").value;
  console.log(tarjetaNum);
  const ocultar = validator.maskify(tarjetaNum);
  const validar = validator.isValid(tarjetaNum);

  const mensajeValidacion = document.createElement('P');
  if (validar) {
    mensajeValidacion.textContent = 'Tu tarjeta ' + ocultar + ' ha sido confirmada con éxito! Muchas gracias por su compra'
  } else {
    mensajeValidacion.textContent = 'Tu tarjeta ' + ocultar + ' No fue aceptada, por favor prueba de nuevo o selecciona otro método de pago'
  }

  formulario.appendChild(mensajeValidacion);

});












