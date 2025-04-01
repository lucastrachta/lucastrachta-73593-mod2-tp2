let numero = prompt("Ingresa un número entero positivo:");
let numeroInvertido = 0;

if (numero !== null && !isNaN(numero) && Number(numero) > 0) {
    numero = parseInt(numero, 10); 

    while (numero > 0) {
        let digito = numero % 10; 
        numeroInvertido = numeroInvertido * 10 + digito; 
        numero = Math.floor(numero / 10);
    }

    console.log(`Número invertido: ${numeroInvertido}`);
} else {
    console.log("Por favor, ingresa un número entero positivo válido.");
}
