// Función para sumar
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir
function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    } else {
        return num1 / num2;
    }
}

// Ejemplo de uso
var numero1 = prompt("INgrese el primero numero");
var numero2 = prompt("INgrese el segundo numero: ");

console.log("Suma:", sumar(numero1, numero2));
console.log("Resta:", restar(numero1, numero2));
console.log("Multiplicación:", multiplicar(numero1, numero2));
console.log("División:", dividir(numero1, numero2));
