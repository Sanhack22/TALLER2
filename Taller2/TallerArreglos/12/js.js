//Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
//letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
//de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.
    


function ADN(cadena=[],ingreso,pasa=true,i=0,) { 
    //las veces que se va a pedir una cadena
    let veces=parseInt(prompt("Cuantas cadenas de ADN desea ingresar"))
    let contador=""
    while (pasa&&i<veces) {
        
    
        ingreso=prompt("Ingrese una cadena de ADN  con T,C,G,A")
        //Valdacion de que sean los caracteres correctos
        for (let I = 0; I < ingreso.length; I++) {
            if (ingreso[I]!=("A")&&ingreso[I]!=("C")&&ingreso[I]!=("T")&&ingreso[I]!=("G")) {
                alert("Error caracter no valido :c")
                pasa=false
                return console.log("ERROR ._.");
                break
        
                

        }else{
            cadena.push(ingreso)
        }
        }i++

        
    }
    //Se cuentan las veces que aparecen la T en la cadena
    for (let a = 0; a < cadena.length; a++) {
        for (let b = 0; b < cadena[a].length; b++) {

            if (cadena[a][b]=="T") {
                contador=contador+"T"
                console.log('HUEVOS A 600');
            }
            console.log(contador);

        }
    }
return 
}

ADN()

