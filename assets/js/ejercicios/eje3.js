document.addEventListener('DOMContentLoaded', function() {
    let i = 1;
    let output = '';

    while (i <= 100) {
        output += i + ' ';
        i *= 2;
    }

    alert("Potencias de 2 menores o iguales a 100: " + output.trim());
});