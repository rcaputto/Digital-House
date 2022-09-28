// funcion NAIPES ----> Lista de "Strings" ------> oro [ 1 de oro,2 de oro,3 de oro, ...]

/*function productoria(numero) {
    let resultado = 1;
    for (let i = 0; i < numero.length; i++) {
        let n = numero[i];
        if (n != 0){
        resultado = resultado * n;
    }
}
    return resultado;
}
console.log (productoria([4,2]))
*/
function productoria(numero) {
    let resultado = 1;
    for (let i = 0; i < numero.length; i++) {
        if (numero [i] != 0){
        resultado = resultado * numero [i];
    }
}
    return resultado;
}
console.log (productoria([4,2]))