document.addEventListener('DOMContentLoaded', function() {
    let notas = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        notas[i] = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        suma += notas[i];
    }

    let promedio = suma / 5;
    let notaMax = Math.max(...notas);
    let notaMin = Math.min(...notas);

    alert("Notas: " + notas.join(', '));
    alert("Promedio: " + promedio);
    alert("Nota más alta: " + notaMax);
    alert("Nota más baja: " + notaMin);
});