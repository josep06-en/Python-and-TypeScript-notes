// ============================================
// 1. TIPOS DE DATOS BÁSICOS – PROFUNDIZACIÓN
// ============================================

// TIPOS PRIMITIVOS (revisión)
let nombre: string = "Josep";
let edad: number = 25;
let activo: boolean = true;

// Constantes con inferencia de tipo
const PI = 3.14159; // TypeScript infiere: number

// TIPOS ESPECIALES
let variableFlexible: any = "texto"; // ⚠️ Se desaconseja salvo casos muy puntuales
variableFlexible = 42;

// ✅ Alternativa segura a 'any': 'unknown'
let entrada: unknown;
entrada = "Hola mundo";
entrada = 10;

// Para operar con 'unknown', debes comprobar su tipo
if (typeof entrada === "string") {
    console.log("Longitud del string:", entrada.length);
}

// `undefined` y `null`
let indefinido: undefined = undefined;
let nulo: null = null;

// NEVER: funciones que no devuelven nunca (errores o bucles infinitos)
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

// Ejemplo más completo con tipos de retorno
function obtenerEdad(usuario: string | null): number | never {
    if (usuario === null) {
        throw new Error("Usuario no encontrado");
    }
    return 30;
}

// Ejemplo de tipo literal inferido (readonly string literal)
const rolFijo = "admin"; // TypeScript infiere: 'admin'

// También se puede declarar explícitamente
let estadoConexion: "conectado" | "desconectado" = "conectado";

// ============================
// BUENAS PRÁCTICAS
// ============================
// ❌ Evitar 'any' salvo excepciones muy justificadas
// ✅ Preferir 'unknown' si no sabes el tipo y harás validación posterior
// ✅ Usa tipos literales y unions para valores restringidos
// ✅ Usa 'never' para funciones que nunca retornan, como lanzadores de errores

// ============================
// TIPADO ESTRICTO EN FUNCIONES
// ============================

// Usar tipos explícitos en argumentos y retorno
function calcularArea(base: number, altura: number): number {
    return (base * altura) / 2;
}

// ============================
// EJERCICIO PROPUESTO
// ============================
// Crea una función que acepte un parámetro tipo `string | number` y devuelva:
// - Si es string: su longitud
// - Si es number: su doble

function analizarDato(dato: string | number): number {
    if (typeof dato === "string") {
        return dato.length;
    } else {
        return dato * 2;
    }
}

console.log(analizarDato("Josep")); // 5
console.log(analizarDato(10));      // 20