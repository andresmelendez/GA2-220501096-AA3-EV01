document.addEventListener('DOMContentLoaded', function() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = (9 / 5) * celsius + 32;
    alert(celsius + "°C es igual a " + fahrenheit + "°F");
});