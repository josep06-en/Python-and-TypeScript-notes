// ========================================================
// 6. TIPOS PERSONALIZADOS – PROFUNDIZACIÓN AVANZADA EN TYPESCRIPT
// ========================================================

/**
 * Este script profundiza en los tipos personalizados en TypeScript:
 * - Union Types (Tipos unión)
 * - Literal Types (Tipos literales)
 * - Type Aliases (Alias de tipo)
 * - Intersection Types (Tipos intersección)
 * - Type Guards (Guardas de tipos)
 * - Discriminated Unions (Uniones discriminadas)
 * - Uso avanzado de tipos en funciones y objetos
 */

// 1. TYPE ALIAS: definir un alias para un tipo complejo
type ID = string | number;

let usuarioId: ID = 12345;
usuarioId = "abcde123";
console.log("ID usuario:", usuarioId);

// 2. UNION TYPES: variable que puede ser uno de varios tipos
let resultado: number | string;
resultado = 42;
console.log("Resultado número:", resultado);
resultado = "cuarenta y dos";
console.log("Resultado string:", resultado);

// 3. LITERAL TYPES: restringir valores a constantes específicas
type Direccion = "Norte" | "Sur" | "Este" | "Oeste";

let direccionUsuario: Direccion = "Norte";
// direccionUsuario = "Centro"; // Error: no está permitido

console.log("Dirección:", direccionUsuario);

// 4. INTERSECTION TYPES: combinar tipos para crear uno nuevo que tiene todo
type Persona = {
    nombre: string;
    edad: number;
};

type Trabajador = {
    puesto: string;
    salario: number;
};

type Empleado = Persona & Trabajador;

const empleado1: Empleado = {
    nombre: "Ana",
    edad: 30,
    puesto: "Developer",
    salario: 50000,
};

console.log("Empleado:", empleado1);

// 5. TYPE GUARDS: comprobaciones para tipos union

function imprimirId(id: ID) {
    if (typeof id === "string") {
        console.log("ID en string:", id.toUpperCase());
    } else {
        console.log("ID en número:", id.toFixed(2));
    }
}

imprimirId(101);
imprimirId("abc123");

// 6. FUNCIONES QUE USAN TYPE GUARDS PARA UNION TYPES COMPLEJOS

type Animal = { tipo: "perro"; ladrido: () => void } | { tipo: "gato"; maullido: () => void };

function hacerSonido(animal: Animal) {
    if (animal.tipo === "perro") {
        animal.ladrido();
    } else {
        animal.maullido();
    }
}

const perro: Animal = {
    tipo: "perro",
    ladrido: () => console.log("Guau guau!"),
};

const gato: Animal = {
    tipo: "gato",
    maullido: () => console.log("Miau miau!"),
};

hacerSonido(perro);
hacerSonido(gato);

// 7. DISCRIMINATED UNIONS: uso de propiedad común para distinguir tipos

interface Circulo {
    tipo: "circulo";
    radio: number;
}

interface Rectangulo {
    tipo: "rectangulo";
    ancho: number;
    alto: number;
}

type Forma = Circulo | Rectangulo;

function areaForma(forma: Forma): number {
    switch (forma.tipo) {
        case "circulo":
            return Math.PI * forma.radio ** 2;
        case "rectangulo":
            return forma.ancho * forma.alto;
        default:
            const _exhaustiveCheck: never = forma;
            return _exhaustiveCheck;
    }
}

const circulo: Circulo = { tipo: "circulo", radio: 5 };
const rectangulo: Rectangulo = { tipo: "rectangulo", ancho: 10, alto: 20 };

console.log("Área círculo:", areaForma(circulo));
console.log("Área rectángulo:", areaForma(rectangulo));

// 8. TIPOS PERSONALIZADOS EN FUNCIONES GENERICAS Y CONDICIONALES

type Respuesta<T> = {
    exito: boolean;
    datos?: T;
    error?: string;
};

function manejarRespuesta<T>(respuesta: Respuesta<T>) {
    if (respuesta.exito) {
        console.log("Datos:", respuesta.datos);
    } else {
        console.error("Error:", respuesta.error);
    }
}

const respuestaCorrecta: Respuesta<string> = { exito: true, datos: "Operación exitosa" };
const respuestaError: Respuesta<null> = { exito: false, error: "Fallo en la operación" };

manejarRespuesta(respuestaCorrecta);
manejarRespuesta(respuestaError);

// 9. TYPE ASSERTIONS (Casting) para trabajar con tipos personalizados

let valorDesconocido: unknown = "hola";

let valorCadena: string = valorDesconocido as string;
console.log("Valor cadena (assertion):", valorCadena);

// 10. TIPOS CONDICIONALES Y MAPPED TYPES (introducción rápida)

type Opciones = "rojo" | "verde" | "azul";

type MapaColores = {
    [K in Opciones]: string;
};

const colores: MapaColores = {
    rojo: "#ff0000",
    verde: "#00ff00",
    azul: "#0000ff",
};

console.log("Color verde:", colores.verde);

// 11. UTILIDADES DE TYPESCRIPT CON TIPOS PERSONALIZADOS (Partial, Readonly, Pick, Omit)

interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    activo: boolean;
}

const usuarioCompleto: Usuario = {
    id: 1,
    nombre: "Josep",
    correo: "josep@email.com",
    activo: true,
};

// Partial permite que las propiedades sean opcionales
const usuarioParcial: Partial<Usuario> = {
    nombre: "Josep",
};

// Readonly hace las propiedades solo lectura
const usuarioReadonly: Readonly<Usuario> = {
    id: 2,
    nombre: "Ana",
    correo: "ana@email.com",
    activo: false,
};

// usuarioReadonly.nombre = "Nuevo"; // Error: no se puede modificar

// Pick permite elegir propiedades específicas
const usuarioPick: Pick<Usuario, "nombre" | "correo"> = {
    nombre: "Carlos",
    correo: "carlos@email.com",
};

// Omit permite omitir propiedades
const usuarioOmit: Omit<Usuario, "activo"> = {
    id: 3,
    nombre: "Laura",
    correo: "laura@email.com",
};

console.log("Usuario completo:", usuarioCompleto);
console.log("Usuario parcial:", usuarioParcial);
console.log("Usuario readonly:", usuarioReadonly);
console.log("Usuario pick:", usuarioPick);
console.log("Usuario omit:", usuarioOmit);

// ============================
// ¡Fin script 6: TIPOS PERSONALIZADOS! 🎉
// ============================