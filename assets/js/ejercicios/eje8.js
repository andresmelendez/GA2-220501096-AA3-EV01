document.addEventListener('DOMContentLoaded', function() {
    let vector = [];
    for (let i = 0; i < 5; i++) {
        vector[i] = prompt("Ingrese un elemento para el vector:");
    }
    let vectorInvertido = vector.slice().reverse();
    alert("Vector invertido: " + vectorInvertido.join(', '));
});