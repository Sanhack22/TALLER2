//) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.

let array1=[1,2,3,4,5,6];

let array2=array1.slice(array1)
let suma=0
for (let index = 0; index < array2.length; index++) {
    array2.splice(array2[index],1)
    array2.push(array2[index],1,array2+1)
    console.log(array2);
}


console.log(array2);


