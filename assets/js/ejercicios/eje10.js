document.addEventListener('DOMContentLoaded', function() {
    let matriz = [
        [parseInt(prompt("Ingrese el valor para [0][0]:")), parseInt(prompt("Ingrese el valor para [0][1]:")), parseInt(prompt("Ingrese el valor para [0][2]:")), parseInt(prompt("Ingrese el valor para [0][3]:"))],
        [parseInt(prompt("Ingrese el valor para [1][0]:")), parseInt(prompt("Ingrese el valor para [1][1]:")), parseInt(prompt("Ingrese el valor para [1][2]:")), parseInt(prompt("Ingrese el valor para [1][3]:"))],
        [parseInt(prompt("Ingrese el valor para [2][0]:")), parseInt(prompt("Ingrese el valor para [2][1]:")), parseInt(prompt("Ingrese el valor para [2][2]:")), parseInt(prompt("Ingrese el valor para [2][3]:"))]
    ];

    let sumaFilas = matriz.map(fila => fila.reduce((acc, valor) => acc + valor, 0));
    let sumaColumnas = [0, 0, 0, 0];

    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            sumaColumnas[j] += matriz[i][j];
        }
    }

    alert("Suma de cada fila: " + sumaFilas.join(', '));
    alert("Suma de cada columna: " + sumaColumnas.join(', '));
});