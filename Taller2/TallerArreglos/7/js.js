/*Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
verduras) queden en el arreglo que les corresponde. Use ciclos.*/

let verduras = ["Pera", "Cebolla", "Limón", "Pimentón"]
let frutas = ["Manzana","Banano", "Lechuga", "Perejíl"]


for (let index = 0; index < frutas.length; index++) {
    switch (frutas[index]) {
        case 'Perejíl':
            frutas[index]='Limón'    
        break;

        case 'Lechuga':
            frutas[index]='Pera'    
        break;
    
    }
}

for (let index = 0; index < verduras.length; index++) {
    switch (verduras[index]) {
        case 'Pera':
            verduras[index]='Lechuga'
            break;
        case 'Limón':
            verduras[index]='Perejíl'    
        break;
    
    }
}console.log(frutas,verduras);




/*
let arra1;
let array2;

for (let i = 0; i < verduras.length; i++) {

    if (verduras[i]!="Cebolla"&&verduras[i]!="Pimentón"&&verduras[i]!="Lechuga"&&verduras[i]!="Perejíl") {
        array2=verduras.splice(i,1)
        frutas.push(verduras[i])

        
    }

}



for (let index = 0; index < frutas.length; index++) {

    if (frutas[index]!="Manzana"&&frutas[index]!="Banano"&&frutas[index]!="Limón"&&frutas[index]!="Pera") {
        arra1=frutas.splice(index,1)
        verduras.push(frutas[index])

        
    }
}





console.log(verduras,frutas);*/