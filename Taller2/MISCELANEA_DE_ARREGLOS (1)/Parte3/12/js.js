let numeros= [5, 7, 90, 2, 5, 3, 8, 99] 

numeros.forEach(function (num1) {

    numeros.forEach(function(num2) {
        
    if (num1+1==num2) {
            console.log(num1,num2);
    }
        
    });
    
});