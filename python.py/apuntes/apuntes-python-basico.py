#APUNTES DE PYTHON BÁSICO
# Funciones básicas en Python

# 1. print() - Muestra texto o variables en la consola
print("¡Hola Mundo!")  # Imprime: ¡Hola Mundo!
nombre = "Ana"
print("Hola", nombre)  # Imprime: Hola Ana

# 2. len() - Devuelve la longitud de una secuencia (string, lista, etc)
texto = "Python"
print(len(texto))  # Imprime: 6

# 3. type() - Devuelve el tipo de dato de una variable
numero = 42
print(type(numero))  # Imprime: <class 'int'>

# 4. input() - Lee entrada del usuario
nombre = input("Introduce tu nombre: ")
print("Hola", nombre)

# 5. Conversión de tipos
# int() - Convierte a entero
# float() - Convierte a decimal 
# str() - Convierte a texto
numero_texto = "123"
numero = int(numero_texto)  # Convierte "123" a 123
decimal = float("12.34")    # Convierte "12.34" a 12.34
texto = str(123)           # Convierte 123 a "123"

# 6. sum() - Suma los elementos de una secuencia
numeros = [1, 2, 3, 4, 5]
print(sum(numeros))  # Imprime: 15

# 7. max() y min() - Encuentra el valor máximo y mínimo
print(max(numeros))  # Imprime: 5
print(min(numeros))  # Imprime: 1

# 8. range() - Genera una secuencia de números
for i in range(5):  # Genera números del 0 al 4
    print(i)

# Condicionales en Python

# Ejemplo básico de if
edad = 18
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# Ejemplo con if, elif y else
nota = 85
if nota >= 90:
    print("Sobresaliente")
elif nota >= 80:
    print("Notable")
elif nota >= 70:
    print("Bien")
elif nota >= 60:
    print("Suficiente")
else:
    print("Suspenso")

# Ejemplo práctico combinando conceptos
nombre = input("Introduce tu nombre: ")
edad = int(input("Introduce tu edad: "))

if len(nombre) < 3:
    print("El nombre es demasiado corto")
elif edad < 0:
    print("La edad no puede ser negativa")
else:
    print(f"Hola {nombre}, tienes {edad} años")

# Definición de Funciones en Python

# Función básica sin parámetros
def saludar():
    print("¡Hola!")

saludar()  # Llamada a la función

# Función con parámetros
def saludar_persona(nombre):
    print(f"¡Hola {nombre}!")

saludar_persona("María")  # Imprime: ¡Hola María!

# Función con valor de retorno
def suma(a, b):
    return a + b

resultado = suma(5, 3)
print(resultado)  # Imprime: 8

# Función con parámetros por defecto
def saludar_con_idioma(nombre, idioma="español"):
    if idioma == "español":
        print(f"¡Hola {nombre}!")
    elif idioma == "inglés":
        print(f"Hello {nombre}!")

saludar_con_idioma("Juan")          # Imprime: ¡Hola Juan!
saludar_con_idioma("John", "inglés") # Imprime: Hello John!

# Función con múltiples valores de retorno
def obtener_info_persona(nombre, edad):
    info = f"Nombre: {nombre}"
    es_mayor = edad >= 18
    return info, es_mayor

info, es_mayor = obtener_info_persona("Ana", 20)
print(info)      # Imprime: Nombre: Ana
print(es_mayor)  # Imprime: True
