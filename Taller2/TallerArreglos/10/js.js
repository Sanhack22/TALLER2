/*Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo.*/

function Nombres(arraNombres=[],nombre,contador=0) {
    
    let Cantidad=parseInt(prompt("Ingrese la cantidad de nombres que desea ingresar"))
    for (let index = 0; index < Cantidad; index++) {
        nombre=prompt("Ingrese el nombre")
        nombre=nombre.toUpperCase()
        arraNombres.push(nombre)
    }

    for (let i = 0; i < arraNombres.length; i++) {
        for (let a = 0; a < arraNombres[i].length; a++) {
            if (arraNombres[i][a]=="C") {
                contador++
            }
        }

       
    }
return console.log("El array contiene ",contador," C");
}

Nombres()