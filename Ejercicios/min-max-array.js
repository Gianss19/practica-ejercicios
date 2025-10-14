/*
                            Intermedio
Dado un arreglo de números, encuentra el número más grande y el más pequeño.
 */
    const array = [12, 5, 8, 130, 44, -3, 0, 87]
    let arrOrdenado = array.toSorted((a,b) =>a - b);
    const max = arrOrdenado[arrOrdenado.length-1];
    const min = arrOrdenado[0];
    console.log(arrOrdenado);
    console.log(min);
    console.log(max);
    

