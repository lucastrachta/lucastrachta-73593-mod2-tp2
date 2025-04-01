let numeroAleatorio = Math.floor(Math.random() * 10) + 1;  
let adivinanza;

do {
    adivinanza = parseInt(prompt("Adivina el número entre 1 y 10:"));

    if (adivinanza === numeroAleatorio) {
        alert("¡Felicidades! Adivinaste el número.");
    } else if (adivinanza < numeroAleatorio) {
        alert("El número es mayor. Intenta de nuevo.");
    } else if (adivinanza > numeroAleatorio) {
        alert("El número es menor. Intenta de nuevo.");
    }
} while (adivinanza !== numeroAleatorio);
