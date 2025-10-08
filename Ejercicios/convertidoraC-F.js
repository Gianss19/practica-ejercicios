let fConversion = 0;
function Conversion(valor,  tipo){
if(tipo === "C"){

let fConversion = (valor * 1.8) + 32;
console.log(fConversion);
}

else if(tipo === "F"){
let fConversion = (valor - 32) / 1.8;
console.log(fConversion);
}


    
}

Conversion(25, "F");
Conversion(77, "C");
//Conversion(10);
