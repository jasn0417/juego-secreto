let numeroSecreto = 0;
let intentos = 0;
let numeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor")
        }
        else {
            asignarTextoElemento("p", "el numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(numeroSorteados)

    if(numeroSorteados.length == numeroMaximo ) {
        asignarTextoElemento("p", "Ya se sortearon los numeros posibles");
    } else {

        if (numeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

        }
    }


function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto:")
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){  
    //limpiar la caja, indicar mensaje de intervalo de numeros, generar el numero aleatoreo,deshabbilitar de nuevo juego,inicializar intentos
    limpiarCaja()
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}


condicionesIniciales();
