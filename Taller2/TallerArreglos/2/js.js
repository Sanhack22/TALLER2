/*Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo*/
function cadena() {
    let arreglo=['AATGAAC', 'GTTTTTC', 'GGTAAA', 'CCCCATGGG']
    let acomuladorA=""
    let acomuladorC=""
    let acomuladorT=""
    let acomuladorG=""

    for (let index = 0; index < arreglo.length; index++) {
        for (let i = 0; i < arreglo[index].length; i++) {
            
            switch (arreglo[index][i]) {
                case "A":
                            acomuladorA=acomuladorA+(arreglo[index][i])
                            break
                        case "T":
                            acomuladorT=acomuladorT+(arreglo[index][i])
                            break
                        case "G":
                            acomuladorG=acomuladorG+(arreglo[index][i])
                            break
                        case "C":
                            acomuladorC=acomuladorC+(arreglo[index][i])
                        break
            
                
            }

        }
        
    }
    
    return console.log(acomuladorA,acomuladorT,acomuladorG,acomuladorC);
}
cadena()



let A=[]
let T=[]
let G=[]
let C=[]


function dioMio() {
    let arreglo=['AATGAAC', 'GTTTTTC', 'GGTAAA', 'CCCCATGGG']

    for (let index = 0; index < arreglo.length; index++) {

        for (let a = 0; a < arreglo[index].length; a++) {

                switch (arreglo[index][a]) {
                        case "A":
                            A.push(arreglo[index][a])
                            break
                        case "T":
                            T.push(arreglo[index][a])
                            break
                        case "G":
                            G.push(arreglo[index][a])
                            break
                        case "C":
                            C.push(arreglo[index][a])
                        break

                        
                    }

                

            
        }
        
    }
    return console.log(A,T,G,C);
}

dioMio()