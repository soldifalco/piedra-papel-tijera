//inicializo los puntos del juego

let puntosUsuario = 0;
let puntosPc = 0;

//mensaje de instrucciones

let instrucciones = document.querySelector("#instrucciones");

//contenedor de los puntos

let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");

//mensaje contenedor

let mensaje = document.querySelector("#mensaje");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

//array para dar funcionalidad a los botones de "armas"

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach((boton) => {
  boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
  contenedorPuntosUsuario.innerText = 1;
}
