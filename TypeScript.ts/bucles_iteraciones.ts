// ========================================================
// 4. BUCLES E ITERACIONES – PROFUNDIZACIÓN AVANZADA
// ========================================================

/**
 * En este módulo cubrimos las estructuras de bucles e iteraciones
 * avanzadas y prácticas recomendadas en TypeScript:
 * - Bucle for clásico, optimizaciones y tips
 * - Bucle while y do-while
 * - Iteración con for...of y for...in
 * - Uso avanzado de arrays con métodos iterativos (map, filter, reduce)
 * - Iteradores y generators
 * - Control de flujo con break, continue y etiquetas
 */

// 1. BUCLE FOR CLÁSICO - USOS Y OPTIMIZACIONES
const numeros: number[] = [10, 20, 30, 40, 50];
console.log("🔢 Números originales:", numeros);

// Ejemplo básico for clásico
for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: Valor = ${numeros[i]}`);
}

// Mejorando rendimiento: cache length (en arrays muy grandes)
for (let i = 0, len = numeros.length; i < len; i++) {
    // Aquí se evita recalcular length en cada iteración
    console.log(`Valor cacheado ${i}: ${numeros[i]}`);
}

// 2. BUCLE WHILE Y DO-WHILE
let contador: number = 0;
while (contador < 3) {
    console.log(`while -> Contador = ${contador}`);
    contador++;
}

// do-while garantiza al menos una ejecución
let intentos: number = 0;
do {
    console.log(`do-while -> Intento número ${intentos + 1}`);
    intentos++;
} while (intentos < 3);

// 3. FOR...OF - PARA ITERAR ARRAYS O COLECCIONES ITERABLES
const frutas: string[] = ["manzana", "pera", "plátano"];

for (const fruta of frutas) {
    console.log(`for...of -> Fruta: ${fruta}`);
}

// 4. FOR...IN - ITERAR PROPIEDADES DE OBJETOS
const persona = { nombre: "Ana", edad: 30, profesion: "Ingeniera" };
for (const clave in persona) {
    // Filtrar propiedades heredadas o prototipo
    if (Object.prototype.hasOwnProperty.call(persona, clave)) {
        console.log(`for...in -> ${clave}: ${persona[clave as keyof typeof persona]}`);
    }
}

// 5. MÉTODOS FUNCIONALES DE ARRAY (map, filter, reduce)

// map: transformación de elementos
const cuadrados = numeros.map(n => n * n);
console.log("map -> Cuadrados:", cuadrados);

// filter: filtrado según condición
const mayoresDe25 = numeros.filter(n => n > 25);
console.log("filter -> Mayores de 25:", mayoresDe25);

// reduce: acumulación o cálculo agregado
const sumaTotal = numeros.reduce((acum, val) => acum + val, 0);
console.log("reduce -> Suma total:", sumaTotal);

// 6. USO DE BREAK Y CONTINUE EN BUCLES
console.log("break & continue demo:");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("Saltando el valor 3");
        continue; // pasa a la siguiente iteración sin ejecutar lo demás
    }
    if (i === 7) {
        console.log("Rompiendo el bucle en 7");
        break; // sale completamente del bucle
    }
    console.log(`Valor actual: ${i}`);
}

// 7. ETIQUETAS EN BUCLES PARA CONTROL AVANZADO
console.log("Etiquetas en bucles:");
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("Saliendo de ambos bucles en (1,1)");
            break outerLoop; // sale de outerLoop
        }
        console.log(`Par (i,j): (${i},${j})`);
    }
}

// 8. ITERADORES Y GENERATORS (avanzado)

function* generadorSimple() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generadorSimple();
console.log("Generador simple:");
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// 9. ITERACIÓN PERSONALIZADA CON ITERADORES
const iterablePersonalizado = {
    datos: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        const datos = this.datos;
        return {
            next() {
                if (index < datos.length) {
                    return { value: datos[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

for (const valor of iterablePersonalizado) {
    console.log("Iterable personalizado valor:", valor);
}

// 10. CASO PRÁCTICO: BUSCAR PRIMER NÚMERO PAR EN ARRAY
function primerPar(numeros: number[]): number | null {
    for (const n of numeros) {
        if (n % 2 === 0) {
            return n;
        }
    }
    return null;
}
console.log("Primer número par:", primerPar([1, 3, 7, 8, 10]));

// 11. BUCLES ANIDADOS PARA MATRICES
const matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Iterando matriz:");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}

// 12. CONTROL DE ERRORES EN BUCLES (ejemplo)
const datos: (number | null)[] = [1, 2, null, 4];
for (const valor of datos) {
    if (valor === null) {
        console.warn("Dato nulo detectado, saltando");
        continue;
    }
    console.log("Dato válido:", valor);
}

// 13. TIPOS ESTRICTOS CON FOR...IN Y OBJETOS INDEXADOS
type Diccionario = { [clave: string]: number };
const precios: Diccionario = { manzana: 1.2, pera: 2.3, naranja: 3.4 };
for (const fruta in precios) {
    if (Object.prototype.hasOwnProperty.call(precios, fruta)) {
        console.log(`Precio de ${fruta}: ${precios[fruta]}`);
    }
}

// 14. RECURSIÓN COMO ALTERNATIVA A BUCLES
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial de 5:", factorial(5));

// 15. RESUMEN DE BUENAS PRÁCTICAS:
// - Prefiere for...of para arrays y objetos iterables.
// - Usa for...in sólo para objetos planos con comprobación de hasOwnProperty.
// - Evita modificar índices dentro del bucle.
// - Usa break y continue para mejorar legibilidad.
// - Utiliza generators para crear iteradores personalizados.