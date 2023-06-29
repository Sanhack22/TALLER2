//Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
//nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
//edad.


function nombreEdad() {
    let cadena=[];
    let afirmacion=true;
    let mayores=[];
    let contador=0
    
    while (afirmacion==true) {
        let Nombre=prompt("Ingrese un nombre")
        let edad=parseInt(prompt("Ingrese su edad"))
        if (edad>=18) {
            mayores.push(Nombre,edad)
            contador++
        }
        
        
        let continuar=prompt("Desea continuar?\n1:Si\n2:No")
        if (continuar=="2") {

            afirmacion=false
            
        }
    }

    
    

    return console.log(mayores,"La cantidad de personas mayores de edad es de ",contador); 
}

nombreEdad()