//Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
//menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.


function MenorAmayor(numeros=[]) {
    let veces=parseInt(prompt("Cuantos numeros desea ingresar?"))

    for (let index = 0; index < veces; index++) {
        let insertacion=parseInt(prompt("Ingrese un numero"))
        if (!numeros.includes(insertacion)) {
            numeros.push(insertacion)
    }else{
        return console.log("El numero ya se encuentra en el array y no je puede repetir");
    }
}

    numeros.sort()
    return console.log(numeros);

}

MenorAmayor();