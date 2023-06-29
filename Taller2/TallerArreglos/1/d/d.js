// Calcular el promedio de todos los elementos del arreglo

let array1= [1,2,3,4,5,6]
let promedio= 0
let acomulador=0    
for (let index = 0; index < array1.length; index++) {
    acomulador=acomulador+array1[index]
    promedio=acomulador/array1.length

}

console.log(promedio);

