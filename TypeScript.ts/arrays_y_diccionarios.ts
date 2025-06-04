// ============================================
// 2. ARRAYS Y DICCIONARIOS – PROFUNDIZACIÓN
// ============================================

// ============================
// ARRAYS (LISTAS)
// ============================

// Declaración con sintaxis clásica
let numeros: number[] = [1, 2, 3];

// Alternativa usando genéricos
let frutas: Array<string> = ["manzana", "pera", "uva"];

// Arrays heterogéneos (no recomendado salvo casos concretos)
let mezcla: (string | number)[] = ["edad", 30, "peso", 70];

// Arrays de objetos tipados
interface Producto {
    nombre: string;
    precio: number;
}

const carrito: Producto[] = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 35 }
];

// ============================
// MÉTODOS ÚTILES EN ARRAYS
// ============================

carrito.forEach(p => console.log(`${p.nombre}: ${p.precio}€`));

const total = carrito.reduce((suma, prod) => suma + prod.precio, 0);
console.log("Total:", total);

// map() con retorno tipado
const preciosConIVA: number[] = carrito.map(p => p.precio * 1.21);

// ============================
// DICCIONARIOS U OBJETOS
// ============================

let persona: { [clave: string]: string | number } = {
    nombre: "Ana",
    edad: 30
};

// ✅ Alternativa con interfaz genérica
interface DiccionarioGenerico {
    [clave: string]: any; // o usar unknown
}

const config: DiccionarioGenerico = {
    theme: "dark",
    version: 1.5,
    debug: true
};

// ============================
// MAPAS (Map<K, V>)
// ============================

// Map tipado
let mapa = new Map<string, number>();
mapa.set("uno", 1);
mapa.set("dos", 2);

// Recorrer un Map
for (let [clave, valor] of mapa) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

// Verificar existencia de clave
if (mapa.has("uno")) {
    console.log("Existe la clave 'uno'");
}

// Obtener valor
const valorDos = mapa.get("dos");

// ============================
// EJEMPLO REALISTA: Inventario
// ============================

interface InventarioItem {
    nombre: string;
    cantidad: number;
}

let inventario: Record<string, InventarioItem> = {
    "producto_001": { nombre: "Teclado", cantidad: 15 },
    "producto_002": { nombre: "Ratón", cantidad: 32 }
};

function mostrarInventario(inventario: Record<string, InventarioItem>): void {
    for (let id in inventario) {
        const item = inventario[id];
        console.log(`${id} -> ${item.nombre} (${item.cantidad} uds)`);
    }
}

mostrarInventario(inventario);

// ============================
// BUENAS PRÁCTICAS
// ============================
// ✅ Usar tipos explícitos siempre, especialmente en arrays de objetos.
// ✅ Preferir 'Map' si necesitas operaciones frecuentes de inserción/borrado o claves no-string.
// ✅ Usar 'Record<string, Tipo>' para representar diccionarios con claves dinámicas.
// ✅ Evitar el uso de 'any[]' o 'object' sin tipado.

