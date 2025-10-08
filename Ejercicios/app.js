const app = document.getElementById("app");
const container = document.createElement("section");
const ul = document.createElement("ul");
ul.setAttribute("id", "lista");

const listaEjercicios = [
  { id: 1, nivel: "Básico", descripcion: "Escribe una función que reciba un número y diga si es par o impar." },
  { id: 2, nivel: "Básico", descripcion: "Crea un programa que pida dos números y muestre cuál es mayor, menor o si son iguales." },
  { id: 3, nivel: "Básico", descripcion: "Haz una función que reciba un número y devuelva su tabla de multiplicar del 1 al 10." },
  { id: 4, nivel: "Básico", descripcion: "Dado un arreglo de números, calcula la suma de todos sus elementos." },
  { id: 5, nivel: "Básico", descripcion: "Crea un programa que convierta grados Celsius a Fahrenheit y viceversa según un parámetro." },
  { id: 6, nivel: "Básico", descripcion: "Escribe una función que invierta una cadena de texto (sin usar funciones de JS como reverse)." },
  { id: 7, nivel: "Básico", descripcion: "Crea un programa que cuente cuántas vocales tiene una palabra o frase." },
  { id: 8, nivel: "Intermedio", descripcion: "Escribe una función que determine si una palabra o frase es un palíndromo." },
  { id: 9, nivel: "Intermedio", descripcion: "Crea una función que calcule el factorial de un número usando recursividad." },
  { id: 10, nivel: "Intermedio", descripcion: "Haz un programa que ordene un arreglo de números de menor a mayor SIN usar .sort()." },
  { id: 11, nivel: "Intermedio", descripcion: "Dado un arreglo de números, encuentra el número más grande y el más pequeño." },
  { id: 12, nivel: "Intermedio", descripcion: "Escribe una función que genere un número aleatorio entre dos valores dados (min y max)." },
  { id: 13, nivel: "Intermedio", descripcion: "Crea un programa que convierta un número decimal a binario sin usar métodos predefinidos." },
  { id: 14, nivel: "Intermedio", descripcion: "Haz una función que elimine los elementos duplicados de un arreglo." },
  { id: 15, nivel: "Intermedio", descripcion: "Crea una función que cuente cuántas veces aparece cada palabra en un texto." },
  { id: 16, nivel: "Avanzado", descripcion: "Implementa una función que resuelva el problema de FizzBuzz." },
  { id: 17, nivel: "Avanzado", descripcion: "Escribe una función que encuentre el número n de la secuencia de Fibonacci eficientemente." },
  { id: 18, nivel: "Avanzado", descripcion: "Haz un programa que valide si una cadena tiene los paréntesis correctamente balanceados." },
  { id: 19, nivel: "Avanzado", descripcion: "Crea una función que busque un valor en un arreglo ordenado usando búsqueda binaria." },
  { id: 20, nivel: "Avanzado", descripcion: "Implementa una función que, dada una matriz cuadrada, devuelva su transpuesta." },
  { id: 21, nivel: "Avanzado", descripcion: "Crea un programa que encuentre la palabra más larga en una frase dada." },
  { id: 22, nivel: "Avanzado", descripcion: "Escribe una función que detecte si dos cadenas de texto son anagramas." }
];

const btnGenerar = document.createElement("button");
btnGenerar.innerText = "Generar Ejercicio";
btnGenerar.setAttribute("id", "btn-generar");

const btnAgregar = document.createElement("button");
btnAgregar.innerText = "Agregar Ejercicio";
btnAgregar.setAttribute("id", "btn-agregar");

const numGenerado = document.createElement("p");
let ejercicioSeleccionado = null;

// Contenedor de botones
const divBotones = document.createElement("div");
divBotones.classList.add("botones");
divBotones.appendChild(btnGenerar);
divBotones.appendChild(btnAgregar);

container.innerHTML = `<h1 class="h1-title">TO-DO Ejercicios en JS</h1>`;
container.appendChild(divBotones);
container.appendChild(numGenerado);
container.appendChild(ul);
app.appendChild(container);

// ===== FUNCIONES DE LOCALSTORAGE =====
function guardarEnLocalStorage(id, ejercicio, completado) {
    let lista = JSON.parse(localStorage.getItem("ejercicios")) || {};
    lista[id] = { ejercicio, completado };
    localStorage.setItem("ejercicios", JSON.stringify(lista));
}

function eliminarDeLocalStorage(id) {
    let lista = JSON.parse(localStorage.getItem("ejercicios")) || {};
    delete lista[id];
    localStorage.setItem("ejercicios", JSON.stringify(lista));
}

function cargarDesdeLocalStorage() {
    let lista = JSON.parse(localStorage.getItem("ejercicios")) || {};
    for (let id in lista) {
        crearLi(lista[id].ejercicio, lista[id].completado);
    }
}

// ===== GENERAR EJERCICIO =====
btnGenerar.addEventListener("click", () => {
    numGenerado.innerText = "";
    let rnd = Math.floor(Math.random() * listaEjercicios.length);
    ejercicioSeleccionado = listaEjercicios[rnd];
    
    numGenerado.classList.add("generado");
    numGenerado.innerText = ejercicioSeleccionado.nivel + "\n" + ejercicioSeleccionado.descripcion;
    numGenerado.style.animation = "fadeInUpQuick 0.4s forwards";
});

// ===== CREAR LI =====
function crearLi(ejercicio, completado = false) {
    const li = document.createElement("li");
    li.dataset.id = ejercicio.id;

    const span = document.createElement("span");
    span.innerText = ejercicio.nivel + "\n" + ejercicio.descripcion;

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("checkbox");
    cb.checked = completado;

    const archivo = document.createElement("input");
    archivo.type = "file";

    // Checkbox tacha solo el span
    cb.addEventListener("change", () => {
        if (cb.checked) {
            span.classList.add("tachado");
            guardarEnLocalStorage(ejercicio.id, ejercicio, true);
        } else {
            span.classList.remove("tachado");
            guardarEnLocalStorage(ejercicio.id, ejercicio, false);
        }
    });

    // Si estaba completado al cargar
    if (completado) span.classList.add("tachado");

    li.appendChild(span);
    li.appendChild(cb);
    li.appendChild(archivo);
    ul.appendChild(li);
}

// ===== AGREGAR EJERCICIO =====
btnAgregar.addEventListener("click", () => {
    if (!ejercicioSeleccionado) return;

    const existe = Array.from(ul.children).some(li => li.dataset.id == ejercicioSeleccionado.id);
    if (!existe) {
        crearLi(ejercicioSeleccionado, false);
        guardarEnLocalStorage(ejercicioSeleccionado.id, ejercicioSeleccionado, false);
    } else {
        alert("Ejercicio ya agregado 🚨");
    }
});

// ===== CARGAR AL INICIAR =====
document.addEventListener("DOMContentLoaded", () => {
    cargarDesdeLocalStorage();
});
