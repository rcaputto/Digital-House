

function caloriasDeTrote (vueltas){
 let resultado = 0
  
 for (let i = 1; i <= vueltas; i = i +1) {
    resultado = resultado + i * 5 
  }
 return resultado
}


console.log (caloriasDeTrote (2))