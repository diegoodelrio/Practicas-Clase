const vaciar = () => {
    document.getElementById("pantalla").value = "";
}


//OPERACIONES UNITARIAS

//Funcion cuadrado
var cuadrado = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    num.value = num.value * num.value;
    rellenar_info(num.value);
}

//Funcion cubo
var cubo = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    num.value = num.value * num.value * num.value;
    rellenar_info(num.value);
}

//Funcion modulo
var mod = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    if (num.value < 0){
        num.value = -num.value;
        rellenar_info(num.value);
    } else {
        num.value = num.value;
        rellenar_info(num.value);
    }
}

//Funcion factorial
var fact = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    for (var i = num.value - 1; i >= 1; i--){
        num.value = num.value * i;
    }
    rellenar_info(num.value);
}

//OPERACIONES BINARIAS

let operacion;
let numero;

//Funcion sumar
var add = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    numero = num.value;
    operacion = "+";
}

//Funcion multiplicar
var mul = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    numero = num.value;
    operacion = "*";
}

//Funcion restar
var res = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    numero = num.value;
    operacion = "-";
}

//Funcion division
var div = () => {
    let num = document.getElementById("pantalla");
    validar(num);
    numero = num.value;
    operacion = "÷";
}

//Funcion igual
var eq = () => {
    let numero2 = document.getElementById("pantalla");
    validar(numero2);
    if (operacion == "+"){
        numero2.value = (Number(numero) + Number(numero2.value));
        operacion = "";

    } else if (operacion === "*"){
        numero2.value = (Number(numero) * Number(numero2.value));
        operacion = "";

    } else if (operacion === "-"){
        numero2.value = (Number(numero) - Number(numero2.value));
        operacion === "";

    } else if (operacion === "÷"){
        numero2.value = (Number(numero) / Number(numero2.value));
        operacion === "";
        
    }
    rellenar_info(numero2.value);
}

//OPERACIONES EN FORMATO CSV

//Funcion sumatorio
var sumatorio = () => {
    let num = document.getElementById("pantalla");
    validar_listas(num);
    let list = num.value.split(",");

    let i = 0, acc = 0;
    while (i < list.length) acc += +list[i++];
    num.value = acc;
    rellenar_info(num.value);
}

//Funcion para ordenar por numeros
function sortEggInNest(a,b){
    if (a > b){
        return 1;
    } else if (b > a){
        return -1;
    } else{
        return 0;
    }
}

//Funcion ordenar
var ordenar = () => {
    let num = document.getElementById("pantalla");
    validar_listas(num);
    let list = num.value.split(",");
    num.value = list.sort(sortEggInNest); //Llamo a la funcion creada con anterioridad para realizar bien la ordenacion
    rellenar_info(num.value);
}

//Funcion revertir
var revertir = () => {
    let num = document.getElementById("pantalla");
    validar_listas(num);
    let list = num.value.split(",");
    num.value = list.reverse();
    rellenar_info(num.value);
}

//Funcion quitar
var quitar = () => {
    let num = document.getElementById("pantalla");
    validar_listas(num);
    let list = num.value.split(",");
    num.value = list.splice(0, (list.length - 1));
    rellenar_info(num.value);
}

//TRATAMIENTO DE ERRORES

//Funcion validar
var validar = () => {
    let num = document.getElementById("pantalla");
    try {
        if (isNaN(num.value)) {
            throw alert(new TypeError("El valor introducido no es valido."));
            num.value = Number(num.value);
        }
    } catch(err) {
        alert("Error al introducir los datos. Vuelva a intentarlo.");
    }
}

var validar_listas = () =>{
    let num = document.getElementById("pantalla");
    let list = num.value.split(",");
    for (let indice of list){
        try {
            if (isNaN(indice)) {
                throw alert(new TypeError("El valor introducido no es valido."));
                num.value = Number(indice);
            }
        } catch(err) {
            alert("Error al introducir los datos. Vuelva a intentarlo.");
        }

    }
    
}


//CAMPO INFORMATIVO

//Funcion rellenar_info
var rellenar_info = () => {
    let num = document.getElementById("pantalla");
    let texto = document.getElementById("info");
    if (num.value < 100){
        texto.innerHTML = "<spam>Info: El resultado es menor que 100</spam>";
    } else if (num.value < 200){
        texto.innerHTML = "<spam>Info: El resultado esta entre 100 y 200</spam>";
    } else{
        texto.innerHTML = "<spam>Info: El resultado es mayor que 200</spam>";
    }
}