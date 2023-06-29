let contador=0
let nombres=["Maria", "Pedro", "Juan", "Pablo", "Diana"]

for (let index = 0; index < nombres.length; index++) {
    if (nombres[index]=='Maria') {
        contador++
    }    
}
console.log("El nombre Maria se encuentra ",contador,"veces");