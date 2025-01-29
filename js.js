//una unica función
//uso de display none para las cartas que no quieres ver

function Cambiar_Cartas(actual,siguiente){

let carta_actual = document.getElementById(actual);
let carta_siguiente = document.getElementById(siguiente);

carta_actual.classList.add("d-none")

carta_siguiente.classList.remove("d-none")


}