//Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
//él.

function numNatural(cadena=[]) {
    let afirmacion=true
    
    while (afirmacion==true) {
        let NumIngresado=prompt("Ingrese Un Numero")
        cadena.push(NumIngresado)
        let continuar=prompt("Desea continuar?\n1:Si\n2:No")
        if (continuar=="2") {

            afirmacion=false    
        }
    }

    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index]%2 || cadena[index]%cadena[index] == 1) {
            console.log(cadena[index]);
        }
    }

    return console.log(cadena);
}


numNatural()