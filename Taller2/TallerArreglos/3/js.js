//Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
//elementos del arreglo.
function numMenor() {
    let numero=[]
    let numeroM=0
    let continuar=true
    let numeroMenor=0
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

            if (numero[index]<numero[i]) {

                numeroMenor=numero[index]
                               
            }          
            
            }


    }
    


    
    return console.log(numeroMenor);
}

numMenor()