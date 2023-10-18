//alert("Hola este es mi Javascript");
let nombre= "Cardona Arana Consultores"; 
var nombre1= "CARDONA ARANA"
const nombre2= "Cardona"
console.log(nombre);
console.log(nombre1);
console.log(nombre2);

let contenidoTitulo= "nombre";
let titulo=document.querySelector("".logo.fuente-titulo.inner.HTML == contenidoTitulo)
//CONDICIONALES
let textoTitulo= titulo.innerTExt;
console.log(textoTitulo);
// FUNCIONES
    let nombre1= "Jair";
    let ciudad= "Armenia";
    let gusto= "Viajar";
    let parrafo1= document.querySelector(".parrafo2");
    function cambiarTexto (nombre1,ciudad,gusto) {
        let parrafo2 = 'Me llamo $(nombre1), vivo en $(ciudad); me gusta $(gusto)'
        return parrafo2;
    }

parrafo.innerTExt = cambiarTexto (nombre1,ciudad,gusto);