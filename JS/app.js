// Opción 1: Saludar
function saludar() {
    let nombre = prompt("Ingrese su nombre:");

    if (nombre === null || nombre === "") {
        alert("Debe ingresar un nombre.");
    } else {
        alert("¡Hola, " + nombre + "!");
    }
}

// Opción 2: Mostrar mensaje
function mostrarMensaje() {
    let mensaje = prompt("Ingrese un mensaje:");

    if (mensaje === null || mensaje === "") {
        alert("El mensaje está vacío.");
    } else {
        alert("Mensaje ingresado: " + mensaje);
    }
}

// Opción 3: Sumar números
function sumarNumeros() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Ingrese números válidos.");
    } else {
        let resultado = numero1 + numero2;
        alert("El resultado de la suma es: " + resultado);
    }
}
