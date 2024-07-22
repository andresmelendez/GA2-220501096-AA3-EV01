document.addEventListener('DOMContentLoaded', function() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let c = parseFloat(prompt("Ingrese el tercer número:"));

    if (a > 0) {
        alert("Producto: " + (b * c));
    } else {
        alert("Suma: " + (b + c));
    }
});