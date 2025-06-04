// =======================================
// 🧠  APUNTES BÁSICOS DE TYPESCRIPT
// =======================================

// ============================
// 1. TIPOS DE DATOS BÁSICOS
// ============================

// Tipos primitivos
let nombre: string = "Josep";             // Cadena de texto
let edad: number = 25;                    // Número
let esEstudiante: boolean = true;         // Booleano

// Tipos especiales
let variableFlexible: any = "texto";      // Puede ser cualquier tipo
variableFlexible = 123;

let indefinido: undefined = undefined;
let nulo: null = null;

// ============================
// 2. ARRAYS Y DICCIONARIOS
// ============================

// Arrays (listas)
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: Array<string> = ["manzana", "pera", "uva"];

// Diccionario tipo objeto
let persona: { nombre: string; edad: number } = {
    nombre: "Ana",
    edad: 30
};

// Mapa (estructura clave-valor más robusta que el objeto)
let mapa = new Map<string, number>();
mapa.set("uno", 1);
mapa.set("dos", 2);

// ============================
// 3. ESTRUCTURAS DE CONTROL
// ============================

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// switch para múltiples opciones
let rol = "admin";

switch (rol) {
    case "admin":
        console.log("Acceso total");
        break;
    case "usuario":
        console.log("Acceso limitado");
        break;
    default:
        console.log("Rol desconocido");
}

// ============================
// 4. BUCLES E ITERACIONES
// ============================

// for clásico
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}

// while
let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

// for...of (para recorrer arrays)
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// for...in (para recorrer propiedades de un objeto)
for (let clave in persona) {
    console.log(clave + ":", persona[clave as keyof typeof persona]);
}

// ============================
// 5. FUNCIONES
// ============================

// Función tradicional
function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

// Función flecha
const sumar = (a: number, b: number): number => a + b;

// Parámetros por defecto
function multiplicar(a: number, b: number = 2): number {
    return a * b;
}

// Parámetros opcionales (usando ?)
function saludarOpcional(nombre?: string): void {
    if (nombre) {
        console.log("Hola, " + nombre);
    } else {
        console.log("Hola, desconocido");
    }
}

// Función sin retorno (void)
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

// ============================
// 6. TIPOS PERSONALIZADOS
// ============================

// Union types
let resultado: number | string = 42;
resultado = "cuarenta y dos";

// Literal types
type Rol = "admin" | "usuario" | "invitado";
let rolUsuario: Rol = "usuario";

// ============================
// 7. INTERFACES Y OBJETOS
// ============================

// Definimos una "plantilla" para objetos
interface Usuario {
    nombre: string;
    correo: string;
    edad?: number; // campo opcional
}

const usuario1: Usuario = {
    nombre: "Carlos",
    correo: "carlos@email.com"
};

// ============================
// 8. CLASES (POO BÁSICA)
// ============================

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`);
    }
}

const perro = new Animal("Firulais");
perro.hacerSonido();

// ============================
// ¡Fin de apuntes básicos!
// ============================
