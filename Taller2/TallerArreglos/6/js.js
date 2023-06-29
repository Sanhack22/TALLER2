/*Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos.*/
    

let valle = ["Cali" , "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba","Armenia", "Palmira", "Circasia"];

for (let index = 0; index < valle.length; index++) {
    switch (valle[index]) {
        case 'Salento':
            valle[index]='Palmira'    
        break;
    
    }
}

for (let index = 0; index < valle.length; index++) {
    switch (quindio[index]) {
        case 'Palmira':
            quindio[index]='Salento'
            break;
    
    }
}console.log(quindio,valle);

/*let arra1=[]
let arra2=[]
let a;

for (let index = 0; index < valle.length; index++) {

    if (valle[index]!="Cali"&&valle[index]!="Tulua"&&valle[index]!="Cartago"&&valle[index]!="Palmira") {
        quindio.push(valle[index])
        arra1=valle.splice(index,1)
        
        
    }
}

for (let i = 0; i < quindio.length; i++) {

    if (quindio[i]!="Cordoba"&&quindio[i]!="Armenia"&&quindio[i]!="Circasia"&&quindio!="Salento") {
        valle.push(quindio[i])

        arra2=quindio.splice(i,1)
        
    }
}

console.log(valle  );
console.log(quindio);*/


