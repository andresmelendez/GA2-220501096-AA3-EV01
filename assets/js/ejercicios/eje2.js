document.addEventListener('DOMContentLoaded', function() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let c = parseFloat(prompt("Ingrese el tercer número:"));

    if (a === b + c || b === a + c || c === a + b) {
        alert("Uno de los números es igual a la suma de los otros dos.");
    } else {
        alert("Ninguno de los números es igual a la suma de los otros dos.");
    }
});