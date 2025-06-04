// =======================================================
// 3. ESTRUCTURAS DE CONTROL – PROFUNDIZACIÓN AVANZADA
// =======================================================

/**
 * Este módulo explora técnicas avanzadas de estructuras de control:
 * - Guard clauses
 * - Switch exhaustivo con tipo discriminado
 * - Protección de tipos
 * - Nullish coalescing y optional chaining
 * - Manejo de errores tipado
 * - Control de flujo con lógica compleja
 */

// GUARD CLAUSES (validación temprana)
function procesarPago(monto: number | null) {
    if (monto === null) throw new Error("Monto nulo");
    if (monto <= 0) throw new Error("Monto inválido");
    console.log(`✅ Pago procesado: ${monto} €`);
}

// SWITCH EXHAUSTIVO con union literals
type Rol = "ADMIN" | "USER" | "GUEST" | "READONLY";
function getPermisos(rol: Rol): string {
    switch (rol) {
        case "ADMIN":
            return "📂 Acceso total";
        case "USER":
            return "📁 Acceso limitado";
        case "GUEST":
            return "📄 Solo lectura";
        case "READONLY":
            return "🔒 Acceso restringido";
        default: {
            const _exhaustiveCheck: never = rol;
            return _exhaustiveCheck;
        }
    }
}

// Simulación de entorno
const procesoDebug: boolean = true;
const puertoEntorno: number | undefined = undefined;

// NULLISH COALESCING y TERNARIO
const modo = procesoDebug ? "debug" : "producción";
const puerto = puertoEntorno ?? 3000;
console.log(`⚙️ Modo: ${modo}, Puerto: ${puerto}`);

// OPTIONAL CHAINING + NULLISH COALESCING
interface Direccion {
    ciudad?: string;
    pais?: string;
}
interface Usuario {
    nombre: string;
    direccion?: Direccion;
    activo: boolean;
}
const usuario: Usuario = {
    nombre: "Josep",
    direccion: {
        ciudad: "València"
    },
    activo: true
};
const ciudadUsuario = usuario?.direccion?.ciudad ?? "Desconocida";
console.log("🌍 Ciudad del usuario:", ciudadUsuario);

// TIPO DISCRIMINADO + SWITCH
type Respuesta =
    | { estado: "OK"; datos: string[] }
    | { estado: "ERROR"; mensaje: string }
    | { estado: "LOADING" };

function manejarRespuesta(resp: Respuesta) {
    switch (resp.estado) {
        case "OK":
            console.log("📦 Datos recibidos:", resp.datos);
            break;
        case "ERROR":
            console.error("❌ Error:", resp.mensaje);
            break;
        case "LOADING":
            console.log("⏳ Cargando...");
            break;
        default:
            const _exhaustiveCheck: never = resp;
            return _exhaustiveCheck;
    }
}

// Ejemplo de llamada
manejarRespuesta({ estado: "OK", datos: ["a", "b", "c"] });
manejarRespuesta({ estado: "ERROR", mensaje: "Servidor no disponible" });

// PROTECCIÓN DE TIPOS CON TYPE PREDICATES
type Empleado = { tipo: "empleado"; salario: number };
type Cliente = { tipo: "cliente"; compras: number };
type Persona = Empleado | Cliente;

function esEmpleado(p: Persona): p is Empleado {
    return p.tipo === "empleado";
}

function describirPersona(p: Persona) {
    if (esEmpleado(p)) {
        console.log("👔 Es un empleado con salario:", p.salario);
    } else {
        console.log("🛒 Es un cliente con compras:", p.compras);
    }
}
describirPersona({ tipo: "empleado", salario: 2200 });
describirPersona({ tipo: "cliente", compras: 4 });

// TRY/CATCH TIPADO Y CONTROLADO
try {
    procesarPago(50);
    procesarPago(-10); // Esto lanzará un error
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error("⚠️ Error controlado:", e.message);
    }
}

// ASSERTS PARA VALIDACIONES ESTRICTAS
function assertEsUsuario(val: any): asserts val is Usuario {
    if (typeof val !== "object" || !val || typeof val.nombre !== "string") {
        throw new Error("No es un Usuario válido");
    }
}

const posibleUsuario: any = { nombre: "Laura", activo: true };
try {
    assertEsUsuario(posibleUsuario);
    console.log("🔐 Usuario válido:", posibleUsuario.nombre);
} catch (e) {
    console.error("❌ Validación fallida:", e);
}

// LÓGICA CON OPERADORES BOOLEANOS
const esAdmin = true;
const esActivo = false;
if (esAdmin && esActivo) {
    console.log("👑 Acceso concedido al panel de administrador");
} else if (esAdmin && !esActivo) {
    console.log("🚫 Admin inactivo, acceso denegado");
} else {
    console.log("🧍 Usuario sin privilegios");
}
