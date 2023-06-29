//Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
//promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.
function numeros(arreglo1=[],arreglo2=[]) {
    let acomuladorA=0;
    let acomuladorB=0;
    let promedioA=0;
    let promedioB=0;
    let mayor;
    let mayorP;
    let veces=parseInt(prompt("Ingrese la cantidad de numeros que desee agregar"))
    let numero;


    for (let index = 0; index<veces; index++) {
        numero=parseInt(prompt("Ingrese un numero"))
        arreglo1.push(numero)
    }
    alert("Siguiente grupo")
    for (let index = 0; index<veces; index++) {
        numero=parseInt(prompt("Ingrese un numero"))
        arreglo2.push(numero)
    }


    //Evaluamos el promedio de cada uno de los arrays
    for (let index = 0; index < arreglo1.length; index++) {
        acomuladorA=acomuladorA+arreglo1[index]
        
        }
    
    for (let i = 0; i < arreglo2.length; i++) {
            
            
            }
        
    promedioB=acomuladorB/arreglo2.length
    promedioA=acomuladorA/arreglo1.length
    if (promedioA>promedioB) {
        mayor=arreglo1
        mayorP=promedioA
    }else{
        mayor=arreglo2
        mayorP=promedioB
    }
    return console.log("El que tiene mayor promedio es ",mayor,"con un promedio de ",mayorP);
}

numeros()


function promedio(arreglo1) {
    
}