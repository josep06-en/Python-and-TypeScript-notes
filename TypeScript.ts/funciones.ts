// ========================================================
// 5. FUNCIONES – PROFUNDIZACIÓN AVANZADA EN TYPESCRIPT
// ========================================================

/**
 * Este módulo cubre en profundidad las funciones en TypeScript:
 * - Declaración y tipado estricto
 * - Funciones con parámetros opcionales, por defecto y rest
 * - Funciones flecha y this
 * - Sobrecarga de funciones
 * - Funciones genéricas
 * - Closures y funciones de orden superior
 * - Funciones asíncronas y promesas
 * - Funciones como tipos y callbacks
 */

// 1. FUNCIONES BÁSICAS CON TIPADO EXPLÍCITO
function sumar(a: number, b: number): number {
    return a + b;
}
console.log("Sumar 5 + 7 =", sumar(5, 7));

// 2. PARÁMETROS OPCIONALES Y POR DEFECTO

// Parámetro opcional con '?'
function saludarUsuario(nombre?: string): string {
    return nombre ? `Hola, ${nombre}` : "Hola, desconocido";
}
console.log(saludarUsuario());
console.log(saludarUsuario("Josep"));

// Parámetro por defecto
function multiplicar(a: number, b: number = 2): number {
    return a * b;
}
console.log("Multiplicar 5 * 3 =", multiplicar(5, 3));
console.log("Multiplicar 5 * 2 (por defecto) =", multiplicar(5));

// 3. PARÁMETRO REST PARA ARGUMENTOS VARIABLES
function concatenar(prefijo: string, ...palabras: string[]): string {
    return prefijo + " " + palabras.join(" ");
}
console.log(concatenar("Hola", "mundo", "TypeScript", "funciones"));

// 4. FUNCIONES FLECHA Y CONTEXTO DE 'this'
const restar = (a: number, b: number): number => a - b;
console.log("Restar 10 - 3 =", restar(10, 3));

// Uso de 'this' en función tradicional
const obj = {
    nombre: "Objeto1",
    mostrarNombre() {
        console.log("Función tradicional this.nombre:", this.nombre);
    },
    mostrarNombreFlecha: () => {
        // En arrow 'this' no apunta al objeto sino al contexto léxico exterior
        console.log("Función flecha this.nombre:", this.nombre);
    }
};
obj.mostrarNombre();         // Objeto1
obj.mostrarNombreFlecha();   // undefined o valor global

// 5. SOBRECARGA DE FUNCIONES
function hacerOperacion(a: number, b: number): number;
function hacerOperacion(a: string, b: string): string;
function hacerOperacion(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Tipos no soportados");
}
console.log("Suma números:", hacerOperacion(4, 5));
console.log("Concatena strings:", hacerOperacion("Hola ", "mundo"));

// 6. FUNCIONES GENÉRICAS PARA REUTILIZACIÓN

// Función genérica que retorna el primer elemento de un array
function primerElemento<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log("Primer número:", primerElemento([1, 2, 3]));
console.log("Primer string:", primerElemento(["a", "b", "c"]));

// Función genérica con constraint (restricción)
interface TieneLongitud {
    length: number;
}
function mostrarLongitud<T extends TieneLongitud>(obj: T): void {
    console.log("Longitud:", obj.length);
}
mostrarLongitud("Hola TypeScript");
mostrarLongitud([1, 2, 3, 4]);

// 7. CLOSURES: FUNCIONES QUE RECUERDAN SU CONTEXTO
function crearContador(inicial: number = 0) {
    let contador = inicial;
    return function incrementar(): number {
        contador++;
        return contador;
    };
}
const contador1 = crearContador(5);
console.log(contador1()); // 6
console.log(contador1()); // 7

// 8. FUNCIONES DE ORDEN SUPERIOR: RECIBEN O RETORNAN FUNCIONES
function operar(a: number, b: number, operacion: (x: number, y: number) => number): number {
    return operacion(a, b);
}
console.log("Usando operar con sumar:", operar(3, 4, (x, y) => x + y));
console.log("Usando operar con multiplicar:", operar(3, 4, (x, y) => x * y));

// 9. FUNCIONES ASÍNCRONAS Y PROMESAS

// Función asíncrona que simula llamada API con setTimeout
async function obtenerDatos(id: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Datos recibidos para id: ${id}`);
        }, 1000);
    });
}

async function ejecutar() {
    console.log("Inicio ejecución async");
    const datos = await obtenerDatos(42);
    console.log(datos);
    console.log("Fin ejecución async");
}
ejecutar();

// 10. FUNCIONES COMO TIPOS Y CALLBACKS
type Callback = (resultado: string) => void;

function procesoAsincrono(cb: Callback) {
    setTimeout(() => {
        cb("Proceso terminado");
    }, 500);
}

procesoAsincrono((mensaje) => {
    console.log("Callback recibido:", mensaje);
});

// 11. FUNCIONES CON TIPO VOID Y NEVER

// void: función que no retorna nada
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

// never: función que no retorna nunca (ejemplo: lanza error)
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

// 12. TIPOS DE RETORNO INFERIDOS Y EXPLÍCITOS

function doble(n: number) {
    return n * 2; // Tipo inferido: number
}

const triple = (n: number): number => n * 3; // Tipo explícito

// 13. ASIGNACIÓN DE FUNCIONES A VARIABLES CON TIPOS
const dividir: (a: number, b: number) => number = (a, b) => a / b;
console.log("Dividir 10 / 2 =", dividir(10, 2));

// 14. FUNCIONES RECURSIVAS
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(7) =", fibonacci(7));

// 15. MÉTODOS EN OBJETOS Y CLASES
const calculadora = {
    valor: 0,
    sumar(a: number): void {
        this.valor += a;
    },
    reset(): void {
        this.valor = 0;
    }
};
calculadora.sumar(10);
console.log("Valor calculadora:", calculadora.valor);
calculadora.reset();
console.log("Valor tras reset:", calculadora.valor);

// 16. BIND, CALL Y APPLY (manipulación de 'this')

const persona = {
    nombre: "Josep",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const saludar = persona.saludar;
// saludar(); // Aquí 'this' está indefinido en modo estricto

const saludarBind = persona.saludar.bind(persona);
saludarBind(); // Hola, soy Josep

persona.saludar.call({ nombre: "Ana" }); // Hola, soy Ana
persona.saludar.apply({ nombre: "Carlos" }); // Hola, soy Carlos

// 17. FUNCIÓN AUTOEJECUTABLE (IIFE)
(function mensajeIIFE() {
    console.log("IIFE ejecutada inmediatamente");
})();

// ============================
// ¡Fin script 5: FUNCIONES! 🎉
// ============================
