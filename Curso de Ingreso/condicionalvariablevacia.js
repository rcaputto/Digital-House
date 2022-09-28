// Condicional con variable vacía

let edad = 25
let permisoDeconducir = ''

if ( edad < 17){ 
    permisoDeconducir = 'Prohibido'
} else if (edad > 17 && edad <= 30){
    permisoDeconducir = 'Debe realizar examen de conducir'
} else {
    permisoDeconducir = 'Cómprese un auto'
}
console.log (permisoDeconducir)