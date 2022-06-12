//Clase 15 - Viernes 10 de junio de 2022 - EJERCICIOS DE REPASO
//EJERCICIO 3
/*
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una
variable, realizar una salida por alerta con el mensaje “Fui
yo”.
Caso contrario, la salida será “Yo no fui */

let nombre: string = "Karen";
let nombreIngresado = prompt("Ingrese el nombre a comparar... ");

if (nombre === nombreIngresado) {
  console.log("Fui yo");
} else {
  console.log("No fui yo");
}
