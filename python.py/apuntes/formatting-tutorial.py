# formatting_tutorial.py
# Tutorial básico de String Formatting en Python (Extendido con tablas)

print("=" * 60)
print("📘 TUTORIAL DE FORMATTING EN PYTHON")
print("=" * 60)

# -----------------------
# 1. f-Strings
# -----------------------
print("\n🔹 1. f-Strings")
nombre = "Josep"
edad = 23
altura = 1.80

print(f"Hola, me llamo {nombre} y tengo {edad} años.")
print(f"Mido {altura:.2f} metros.")
print(f"El año que viene tendré {edad + 1} años.")
print(f"|{'Izquierda':<10}|{'Centro':^10}|{'Derecha':>10}|")

# -----------------------
# 2. Método .format()
# -----------------------
print("\n🔹 2. Método .format()")
print("Hola, me llamo {} y tengo {} años.".format(nombre, edad))
print("Hola, me llamo {0} y tengo {1} años. {0} es un gran nombre.".format(nombre, edad))
print("Nombre: {n}, Edad: {e}".format(n=nombre, e=edad))
print("Número con 2 decimales: {:.2f}".format(1234.56789))

# -----------------------
# 3. Operador %
# -----------------------
print("\n🔹 3. Operador % (legacy)")
print("Hola, me llamo %s y tengo %d años." % (nombre, edad))
print("Mido %.2f metros." % altura)
print("|%-10s|%10s|" % ("Izquierda", "Derecha"))

# -----------------------
# 4. Otros ejemplos útiles
# -----------------------
print("\n🔹 4. Otros ejemplos")
precio = 49.99
unidades = 3
total = precio * unidades

print(f"Precio unitario: €{precio:.2f}")
print(f"Total a pagar por {unidades} unidades: €{total:.2f}")
print(f"Con ceros a la izquierda: {42:05d}")
print(f"Porcentaje: {0.876:.2%}")

# -----------------------
# 5. Formato de tablas (manual)
# -----------------------
print("\n🔹 5. Formato de tablas (manual con f-strings)")

productos = [
    ("Manzana", 3, 0.99),
    ("Pan", 2, 1.50),
    ("Leche", 1, 1.20)
]

print(f"{'Producto':<10} {'Cantidad':<10} {'Precio (€)':<10} {'Total (€)':<10}")
print("-" * 45)
for nombre, cantidad, precio in productos:
    total = cantidad * precio
    print(f"{nombre:<10} {cantidad:<10} {precio:<10.2f} {total:<10.2f}")

# -----------------------
# 6. Tablas con tabulate
# -----------------------
print("\n🔹 6. Formato de tablas con tabulate (requiere instalar librería)")

try:
    from tabulate import tabulate

    tabla = [
        ["Manzana", 3, 0.99, 3 * 0.99],
        ["Pan", 2, 1.50, 2 * 1.50],
        ["Leche", 1, 1.20, 1 * 1.20]
    ]
    encabezados = ["Producto", "Cantidad", "Precio (€)", "Total (€)"]

    print(tabulate(tabla, headers=encabezados, tablefmt="fancy_grid", floatfmt=".2f"))

except ImportError:
    print("❌ No se encontró la librería 'tabulate'. Instálala con: pip install tabulate")

# -----------------------
# 7. Tablas con pandas
# -----------------------
print("\n🔹 7. Tablas con pandas (requiere instalar librería)")

try:
    import pandas as pd

    datos = {
        "Producto": ["Manzana", "Pan", "Leche"],
        "Cantidad": [3, 2, 1],
        "Precio (€)": [0.99, 1.50, 1.20]
    }

    df = pd.DataFrame(datos)
    df["Total (€)"] = df["Cantidad"] * df["Precio (€)"]
    print(df.to_string(index=False, float_format="%.2f"))

except ImportError:
    print("❌ No se encontró la librería 'pandas'. Instálala con: pip install pandas")

print("\n✅ Fin del tutorial. Puedes modificar los valores y practicar.")
