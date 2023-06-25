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

// realizo una función que me permita que al tocar el boton de iniciar juego me de un resultado random

function iniciarTurno(e) {
  let eleccionPc = Math.floor(Math.random() * 3);
  let eleccionUsuario = e.currentTarget.id;

  //transformar la elección de el usuario en piedra, papel o tijera

  if (eleccionPc === 0) {
    eleccionPc = "piedra🥌";
  } else if (eleccionPc === 1) {
    eleccionPc = "papel📋";
  } else {
    eleccionPc = "tijera✂";
  }

  //comparo elección de usuario con elección de pc

  if (
    (eleccionUsuario === "piedra🥌" && eleccionPc === "tijera✂") ||
    (eleccionUsuario === "tijera✂" && eleccionPc === "papel📋") ||
    (eleccionUsuario === "papel📋" && eleccionPc === "piedra🥌")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPc === "piedra🥌" && eleccionUsuario === "tijera✂") ||
    (eleccionPc === "tijera✂" && eleccionUsuario === "papel📋") ||
    (eleccionPc === "papel📋" && eleccionUsuario === "piedra🥌")
  ) {
    ganaPc();
  } else {
    empate();
  }
}
