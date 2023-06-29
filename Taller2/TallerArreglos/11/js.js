//Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
//impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.


function NumImpares(nums=[],numIngresado,impares=[]) {
    let veces=parseInt(prompt("Cuantos numeros desea ingresar"))
    let contador=0
    
    for (let index = 0; index < veces; index++) {
        numIngresado=parseInt(prompt("Ingrese el numero que desea"))
        nums.push(numIngresado)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2!=0) {
            contador++
            impares.push(nums[i]);

        }

    }
    return console.log("Los numeros impares son: ",impares,"lo cual son ",contador," numeros")
}

NumImpares()