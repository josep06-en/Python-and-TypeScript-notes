// ========================================================
// 7. INTERFACES Y OBJETOS – PROFUNDIZACIÓN AVANZADA EN TYPESCRIPT
// ========================================================

/**
 * En este script vamos a profundizar en las interfaces y objetos en TypeScript:
 * - Definición básica de interfaces
 * - Interfaces con propiedades opcionales y readonly
 * - Extensión de interfaces (herencia)
 * - Interfaces para funciones
 * - Index signatures (firmas de índice)
 * - Interfaces híbridas (objeto + función)
 * - Implementación de interfaces en clases
 * - Uso avanzado con tipos genéricos
 */

// 1. INTERFACE BÁSICA

interface Usuario {
  nombre: string;
  correo: string;
  edad?: number; // propiedad opcional
}

const usuario1: Usuario = {
  nombre: "Carlos",
  correo: "carlos@email.com",
};

console.log("Usuario1:", usuario1);

// 2. PROPIEDADES READONLY

interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
}

const producto1: Producto = {
  id: 1,
  nombre: "Libro",
  precio: 29.99,
};

// producto1.id = 2; // Error: no se puede modificar un readonly

console.log("Producto1:", producto1);

// 3. EXTENSIÓN DE INTERFACES

interface Persona {
  nombre: string;
  edad: number;
}

interface Empleado extends Persona {
  puesto: string;
  salario: number;
}

const empleado1: Empleado = {
  nombre: "Ana",
  edad: 28,
  puesto: "Ingeniera",
  salario: 40000,
};

console.log("Empleado1:", empleado1);

// 4. INTERFACES PARA FUNCIONES

interface Operacion {
  (a: number, b: number): number;
}

const suma: Operacion = (x, y) => x + y;
const resta: Operacion = function (x, y) {
  return x - y;
};

console.log("Suma:", suma(5, 3));
console.log("Resta:", resta(10, 7));

// 5. INDEX SIGNATURES: para objetos con claves dinámicas

interface DiccionarioTelefonos {
  [nombre: string]: string;
}

const telefonos: DiccionarioTelefonos = {
  Carlos: "555-1234",
  Ana: "555-5678",
};

telefonos["Laura"] = "555-8765";

console.log("Teléfonos:", telefonos);

// 6. INTERFACES HÍBRIDAS: objeto que también es función

interface Contador {
  (inicio: number): string;
  valor: number;
  reiniciar(): void;
}

function crearContador(): Contador {
  let contador = <Contador>function (inicio: number) {
    contador.valor = inicio;
    return `Contador iniciado en ${inicio}`;
  };
  contador.valor = 0;
  contador.reiniciar = function () {
    contador.valor = 0;
    console.log("Contador reiniciado");
  };
  return contador;
}

const miContador = crearContador();
console.log(miContador(10));
console.log("Valor:", miContador.valor);
miContador.reiniciar();
console.log("Valor tras reiniciar:", miContador.valor);

// 7. IMPLEMENTACIÓN DE INTERFACES EN CLASES

interface Vehiculo {
  marca: string;
  modelo: string;
  arrancar(): void;
}

class Coche implements Vehiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar(): void {
    console.log(`El coche ${this.marca} ${this.modelo} ha arrancado.`);
  }
}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.arrancar();

// 8. INTERFACES GENÉRICAS

interface Caja<T> {
  contenido: T;
  abrir(): T;
}

class CajaDeRegalo<T> implements Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  abrir(): T {
    console.log("Abriendo caja...");
    return this.contenido;
  }
}

const cajaNumero = new CajaDeRegalo<number>(100);
console.log("Caja con número:", cajaNumero.abrir());

const cajaString = new CajaDeRegalo<string>("Regalo sorpresa");
console.log("Caja con string:", cajaString.abrir());

// ============================
// ¡Fin script 7: INTERFACES Y OBJETOS! 🎉
// ============================
