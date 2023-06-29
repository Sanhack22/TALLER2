let array =[true, true, false, true, false, false]
let contadorFalse = 0
let i=0

while (i<array.length) {

    if (array[i]==false) {
        contadorFalse++
    }
    i++
    
}
console.log(contadorFalse);