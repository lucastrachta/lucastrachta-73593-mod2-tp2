let filas = parseInt(prompt("Ingresa el número de filas para el triángulo:"));

for (let i = filas; i >= 1; i--) {
    let fila = '*'.repeat(i); 
    console.log(fila);
}
