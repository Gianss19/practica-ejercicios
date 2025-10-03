const app =  document.getElementById("app");
const container = document.createElement("section");
const ul = document.createElement("ul");
ul.setAttribute("id","lista");
const listaEjercicios = 
[
  // ------------------ BÁSICO ------------------
  { 
    id: 1, 
    nivel: "Básico", 
    descripcion: "Escribe una función que reciba un número y diga si es par o impar." 
  },
  { 
    id: 2, 
    nivel: "Básico", 
    descripcion: "Crea un programa que pida dos números y muestre cuál es mayor, menor o si son iguales." 
  },
  { 
    id: 3, 
    nivel: "Básico", 
    descripcion: "Haz una función que reciba un número y devuelva su tabla de multiplicar del 1 al 10." 
  },
  { 
    id: 4, 
    nivel: "Básico", 
    descripcion: "Dado un arreglo de números, calcula la suma de todos sus elementos." 
  },
  { 
    id: 5, 
    nivel: "Básico", 
    descripcion: "Crea un programa que convierta grados Celsius a Fahrenheit y viceversa según un parámetro." 
  },
  { 
    id: 6, 
    nivel: "Básico", 
    descripcion: "Escribe una función que invierta una cadena de texto (sin usar funciones de JS como reverse)." 
  },
  { 
    id: 7, 
    nivel: "Básico", 
    descripcion: "Crea un programa que cuente cuántas vocales tiene una palabra o frase." 
  },

  // ------------------ INTERMEDIO ------------------
  { 
    id: 8, 
    nivel: "Intermedio", 
    descripcion: "Escribe una función que determine si una palabra o frase es un palíndromo (se lee igual al derecho y al revés)." 
  },
  { 
    id: 9, 
    nivel: "Intermedio", 
    descripcion: "Crea una función que calcule el factorial de un número usando recursividad." 
  },
  { 
    id: 10, 
    nivel: "Intermedio", 
    descripcion: "Haz un programa que ordene un arreglo de números de menor a mayor SIN usar .sort()." 
  },
  { 
    id: 11, 
    nivel: "Intermedio", 
    descripcion: "Dado un arreglo de números, encuentra el número más grande y el más pequeño." 
  },
  { 
    id: 12, 
    nivel: "Intermedio", 
    descripcion: "Escribe una función que genere un número aleatorio entre dos valores dados (min y max)." 
  },
  { 
    id: 13, 
    nivel: "Intermedio", 
    descripcion: "Crea un programa que convierta un número decimal a binario sin usar métodos predefinidos." 
  },
  { 
    id: 14, 
    nivel: "Intermedio", 
    descripcion: "Haz una función que elimine los elementos duplicados de un arreglo." 
  },
  { 
    id: 15, 
    nivel: "Intermedio", 
    descripcion: "Crea una función que cuente cuántas veces aparece cada palabra en un texto." 
  },

  // ------------------ AVANZADO ------------------
  { 
    id: 16, 
    nivel: "Avanzado", 
    descripcion: "Implementa una función que resuelva el problema de FizzBuzz (imprimir números del 1 al 100, pero los múltiplos de 3 muestran 'Fizz', los de 5 'Buzz' y los de ambos 'FizzBuzz')." 
  },
  { 
    id: 17, 
    nivel: "Avanzado", 
    descripcion: "Escribe una función que encuentre el número n de la secuencia de Fibonacci de manera eficiente (usa memoización o programación dinámica)." 
  },
  { 
    id: 18, 
    nivel: "Avanzado", 
    descripcion: "Haz un programa que valide si una cadena tiene los paréntesis correctamente balanceados." 
  },
  { 
    id: 19, 
    nivel: "Avanzado", 
    descripcion: "Crea una función que busque un valor en un arreglo ordenado usando búsqueda binaria." 
  },
  { 
    id: 20, 
    nivel: "Avanzado", 
    descripcion: "Implementa una función que, dada una matriz cuadrada, devuelva su transpuesta." 
  },
  { 
    id: 21, 
    nivel: "Avanzado", 
    descripcion: "Crea un programa que encuentre la palabra más larga en una frase dada." 
  },
  { 
    id: 22, 
    nivel: "Avanzado", 
    descripcion: "Escribe una función que detecte si dos cadenas de texto son anagramas (usan las mismas letras en distinto orden)." 
  }
];

container.innerHTML =`<h1 class= "h1-title"> TO-DO Ejercicios en JS</h1>`; 
const btnAgregar = document.createElement("button");
btnAgregar.setAttribute("id", "btn-agregar");
btnAgregar.innerText = "Agregar Ejercicio";

btnAgregar.addEventListener("click",()=>{


});

const btnGenerar = document.createElement("button");
btnGenerar.innerText = "Generar Número";
btnGenerar.setAttribute("id","btn-generar");
btnGenerar.addEventListener("click", ()=>{
    let rnd= (Math.floor(Math.random() * listaEjercicios.length));
    //console.log(rnd);
})


container.appendChild(btnAgregar);

container.appendChild(btnGenerar)
document.addEventListener("DOMContentLoaded", () => app.appendChild(container));

