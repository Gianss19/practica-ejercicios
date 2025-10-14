   /*
                        Avanzado
    Escribe una función que detecte si dos cadenas de texto son anagramas. 

    */
   
   function esAnagrama(cadena1, cadena2)
    {
        cadena1 = cadena1.toLowerCase(); // "StRinG" => "string"
        cadena2 = cadena2.toLowerCase();
        let arr1 = cadena1.split('').sort();    // "string"=> ["s", "t", "r", "i", "n", "g"]
        let arr2 = cadena2.split('').sort();    // ["s", "t", "r", "i", "n", "g"] => ["g", "i", "n", "r", "s", "t"]


        if(arr1.length != arr2.length || arr1.length === 0 || arr2.length === 0){ //si no son de la misma longitud, se rechaza.
            console.log(cadena1 + " y "+cadena2 +" NO son anagramas.");
            return;       
        }
        if(arr1.join("") === arr2.join("")){
            console.log(cadena1 + " y "+cadena2 +" SI son anagramas.");


            return;
        } 

            console.log("estoy entrando aquí");
            
    }

        esAnagrama("aaass", "aaab");
        esAnagrama("cara", "arca");
        esAnagrama("","")
