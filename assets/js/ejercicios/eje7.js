document.addEventListener('DOMContentLoaded', function() {
    let hora24 = parseInt(prompt("Ingrese la hora en formato de 24 horas:"));
    let periodo = hora24 >= 12 ? "p.m." : "a.m.";
    let hora12 = hora24 % 12;
    hora12 = hora12 === 0 ? 12 : hora12;

    alert(hora12 + " " + periodo);
});