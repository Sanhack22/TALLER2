//Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
//Se le debe pedir al usuario que introduzca el arreglo.

function LetrasoORDEN(letras=[]) {

    let veces=parseInt(prompt("Cuantas letras desea ingresar?"))

    for (let index = 0; index < veces; index++) {
        let insertacion=prompt("Ingrese una letra")
        if (!letras.includes(insertacion)) {
            letras.push(insertacion)
    }else{
        return console.log("La letra ya se encuentra en el array y no je puede repetir");
    }
}
    letras.sort()
    return console.log(letras);
}


LetrasoORDEN()