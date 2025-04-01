let palabras = prompt("Ingresa palabras separadas por comas:")
    ?.split(",")
    .map(p => p.trim().toLowerCase());

let palindromas = palabras?.filter(p => p === p.split("").reverse().join(""));

console.log(palindromas.length ? `Palíndromas: ${palindromas.join(", ")}` : "No hay palíndromas.");
