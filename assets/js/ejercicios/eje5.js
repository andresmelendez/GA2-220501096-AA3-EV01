document.addEventListener('DOMContentLoaded', function() {
    let suma = 0;

    for (let i = 50; i <= 200; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }

    alert("Suma de números pares entre 50 y 200: " + suma);
});