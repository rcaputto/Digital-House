// Variable y función
    let colorDepelo = ("negro");
    function miColordepelo (colorDepelo) {
        return "Mi color de pelo es " + colorDepelo
    }   
    console.log (miColordepelo (colorDepelo));

    // Función declarada
    function estadoDelclima (){
        return "soleado"
    }

    console.log (estadoDelclima ());

    // Función para valores por defecto
        function saludo (nombre = "visitante", apellido = "desconocido") {
            return "Bienvenido " + nombre + " " + apellido
        }
        console.log (saludo ())
    
    // Operadores lógicos
        let number1= 5
        let number2= 6  
        let number3= 8
        let number4= 45  
    
        console.log (number1 < number2) && (number3 < number4)
