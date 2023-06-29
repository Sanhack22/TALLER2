//Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
//debe pedir al usuario que introduzca el arreglo.
function numMayor() {
    let numero=[]
    let continuar=true
    let numeroMayor=0
    while (continuar) {
        let nuevo = parseInt(prompt("Ingrese un numero"))
        numero.push(nuevo)
        let desicion=prompt("Desea agregar otro numero?1:SI\n2:NO")
        if (desicion=="2") {
            
            continuar=false
        }
        
    }
    
    for (let i = 0; i < numero.length; i++) {

        for (let index = 0; index < numero.length; index++) {

            if (numero[index]>numero[i]) {

                numeroMayor=numero[index]
                               
            }          
            
            }


    }
    


    
    return console.log("El numero mayor es ",numeroMayor);
}

numMayor()