#-->Bucles en python

# BUCLES EN PYTHON

# 1. Bucle FOR
# El bucle for se usa para iterar sobre una secuencia (lista, tupla, diccionario, conjunto o string)

# Ejemplo básico con lista
print("\nRecorriendo una lista:")
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

# Ejemplo con range()
print("\nUsando range():")
for i in range(3):  # 0, 1, 2
    print(f"Número: {i}")

# Recorriendo un diccionario
print("\nRecorriendo un diccionario:")
estudiante = {
    "nombre": "Juan",
    "edad": 20,
    "carrera": "Informática"
}
for clave, valor in estudiante.items():
    print(f"{clave}: {valor}")

# 2. Bucle WHILE
# El bucle while se ejecuta mientras una condición sea verdadera

# Ejemplo básico
print("\nEjemplo de while:")
contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1

# 3. Control de flujo con break y continue

# Ejemplo de break
print("\nEjemplo de break:")
for i in range(5):
    if i == 3:
        break  # Sale del bucle cuando i es 3
    print(i)

# Ejemplo de continue
print("\nEjemplo de continue:")
for i in range(5):
    if i == 2:
        continue  # Salta la iteración cuando i es 2
    print(i)

# 4. Bucles anidados
print("\nBucles anidados:")
for i in range(2):
    for j in range(2):
        print(f"i: {i}, j: {j}")

# 5. Ejemplo práctico: Búsqueda en matriz
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("\nRecorriendo una matriz:")
for fila in matriz:
    for elemento in fila:
        print(elemento, end=" ")
    print()  # Nueva línea después de cada fila

# 6. While con condición compleja
print("\nWhile con condición compleja:")
numero = 10
while numero > 0:
    print(numero)
    numero -= 2