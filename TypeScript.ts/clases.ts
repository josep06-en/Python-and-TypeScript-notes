// ========================================================
// 8. CLASES (PROGRAMACIÓN ORIENTADA A OBJETOS) EN TYPESCRIPT
// ========================================================

/**
 * En este script avanzaremos en el manejo de clases en TypeScript.
 * Incluye:
 * - Declaración y uso básico de clases
 * - Modificadores de acceso: public, private, protected
 * - Propiedades y métodos estáticos
 * - Herencia y uso de super()
 * - Propiedades readonly
 * - Getters y setters
 * - Clases abstractas
 * - Implementación de interfaces
 * - Clases genéricas
 * - Sobrecarga de métodos (firmas)
 * - Decoradores básicos (introducción)
 */

// 1. CLASE BÁSICA Y CONSTRUCTOR

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

const perro = new Animal("Firulais");
perro.hacerSonido();

// 2. MODIFICADORES DE ACCESO

class Persona {
  public nombre: string;
  private edad: number;
  protected direccion: string;

  constructor(nombre: string, edad: number, direccion: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  public mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Dirección: ${this.direccion}`);
  }

  private obtenerEdad(): number {
    return this.edad;
  }
}

const persona1 = new Persona("Ana", 30, "Calle Falsa 123");
persona1.mostrarDatos();
// persona1.edad; // Error: propiedad privada
// persona1.direccion; // Error: propiedad protegida

// 3. PROPIEDADES Y MÉTODOS ESTÁTICOS

class Matematica {
  static PI: number = 3.1416;

  static calcularAreaCirculo(radio: number): number {
    return Matematica.PI * radio * radio;
  }
}

console.log("PI:", Matematica.PI);
console.log("Área círculo (r=2):", Matematica.calcularAreaCirculo(2));

// 4. HERENCIA Y SUPER()

class Empleado extends Persona {
  private salario: number;

  constructor(nombre: string, edad: number, direccion: string, salario: number) {
    super(nombre, edad, direccion);
    this.salario = salario;
  }

  public mostrarSalario(): void {
    console.log(`Salario de ${this.nombre}: $${this.salario}`);
  }

  // Sobrescribir método
  public mostrarDatos(): void {
    super.mostrarDatos();
    this.mostrarSalario();
  }
}

const empleado1 = new Empleado("Carlos", 40, "Av. Siempre Viva 742", 50000);
empleado1.mostrarDatos();

// 5. PROPIEDADES READONLY

class Punto {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Punto(10, 20);
// p.x = 15; // Error: propiedad readonly

// 6. GETTERS Y SETTERS

class CuentaBancaria {
  private _saldo: number = 0;

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    if (valor < 0) {
      console.log("Saldo no puede ser negativo.");
    } else {
      this._saldo = valor;
    }
  }
}

const cuenta = new CuentaBancaria();
cuenta.saldo = 100;
console.log("Saldo:", cuenta.saldo);
cuenta.saldo = -50; // No cambia saldo

// 7. CLASES ABSTRACTAS E IMPLEMENTACIÓN DE INTERFACES

interface Volador {
  volar(): void;
}

abstract class Vehiculo {
  abstract mover(): void;

  encender(): void {
    console.log("Vehículo encendido");
  }
}

class Avion extends Vehiculo implements Volador {
  mover(): void {
    console.log("Avión está moviéndose");
  }
  volar(): void {
    console.log("Avión está volando");
  }
}

const avion1 = new Avion();
avion1.encender();
avion1.mover();
avion1.volar();

// 8. CLASES GENÉRICAS

class Caja<T> {
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public abrir(): T {
    console.log("Abriendo caja...");
    return this.contenido;
  }
}

const cajaNumero = new Caja<number>(123);
console.log("Contenido caja número:", cajaNumero.abrir());

const cajaTexto = new Caja<string>("Hola Mundo");
console.log("Contenido caja texto:", cajaTexto.abrir());

// 9. SOBRECARGA DE MÉTODOS (FIRMAS)

class Calculadora {
  calcular(a: number, b: number): number;
  calcular(a: string, b: string): string;
  calcular(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("Tipos inválidos");
  }
}

const calc = new Calculadora();
console.log(calc.calcular(5, 10));     // 15
console.log(calc.calcular("Hola, ", "mundo")); // "Hola, mundo"

// 10. DECORADORES BÁSICOS (INTRODUCCIÓN)

// Activar experimentalDecorators en tsconfig.json para usar decoradores

function registrarClase(constructor: Function) {
  console.log(`Clase registrada: ${constructor.name}`);
}

@registrarClase
class ProductoDecorado {
  constructor(public nombre: string, public precio: number) {}
}

const prod = new ProductoDecorado("Lapicero", 1.5);

// ============================
// ¡Fin script 8: CLASES en TypeScript! 🎉
// ============================