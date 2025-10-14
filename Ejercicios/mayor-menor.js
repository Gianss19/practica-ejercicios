    
    /*
                            Básico
    Escribe una función que invierta una cadena de texto (sin usar funciones de JS como reverse).
    
    */ 
    function invertir(palabra) {
            //validaciones
        if(typeof palabra !== "string" || palabra.length === 0 || !isNaN(parseInt(palabra))){
            console.log(palabra + " NO es una palabra válida.");
            return;
        }
        let arr = palabra.split(''); //lo pasamos a array
        let arrInverso = [];

        //invertimos el array
        for (let i = arr.length-1; i >=0; i--) arrInverso.push(arr[i]);               
        arrInverso = arrInverso.join("") //lo pasamos a string de nuevo
        console.log(arrInverso);

        return arrInverso;
    }

    invertir("hola");
