function alfabeto(a=["a", "b", "c", "d", "e", "f", "g"]) {

    let letra=prompt("Ingrese una letra")
        for (let index = 0; index < a.length; index++) {
            if (letra==a[index]) {
                return console.log("La letra SI esta en el array");
            }else{
                return console.log("La letra NO esta en el array");
            }
            } 

        }
alfabeto()