let suma = 0;

while (suma < 100) {
    let input = prompt("Ingresa un número entero:");
    let numero = parseInt(input, 10);

    if (!isNaN(numero)) {
        suma += numero;
        console.log(`Suma actual: ${suma}`);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

console.log(`Total acumulado: ${suma}`);
