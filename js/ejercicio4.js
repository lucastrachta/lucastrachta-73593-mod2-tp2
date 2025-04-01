
function encontrarNumeroMayor(array) {
    
    let mayor = array[0];
  
    
    for (let i = 1; i < array.length; i++) {
  
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
  
  
    return mayor;
  }
  let numeros = [23, 45, 12, 67, 34, 89, 21];
  let numeroMayor = encontrarNumeroMayor(numeros);
  console.log("El número mayor es:", numeroMayor);
  
