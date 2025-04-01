let palabra = prompt("Ingresa una palabra:").toLowerCase();
let vocales = "aeiou";
let contador = 0;

for (let letra of palabra) {
    if (vocales.includes(letra)) {
        contador++;
    }
}

console.log(`La palabra "${palabra}" tiene ${contador} vocal(es).`);
