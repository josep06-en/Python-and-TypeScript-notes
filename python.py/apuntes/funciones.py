#-->Extensión de funciones
# =================== GUÍA DETALLADA DE FUNCIONES ===================

# DEFINICIÓN BÁSICA DE FUNCIONES
# Una función se define usando 'def', seguido del nombre y paréntesis
def saludar():
    print("¡Hola mundo!")

# FUNCIONES CON PARÁMETROS
# Los parámetros van dentro de los paréntesis
def saludar_persona(nombre):
    print(f"¡Hola {nombre}!")

# FUNCIONES CON RETORNO
# Usar 'return' para devolver valores
def sumar(a, b):
    return a + b

# FUNCIONES CON PARÁMETROS POR DEFECTO
# Los parámetros pueden tener valores predeterminados
def saludar_formal(nombre, titulo="Sr./Sra."):
    print(f"Estimado/a {titulo} {nombre}")

# FUNCIONES CON MÚLTIPLES PARÁMETROS
def calcular_precio(precio_base, impuesto=0.21, descuento=0):
    precio_final = precio_base + (precio_base * impuesto) - descuento
    return precio_final

# FUNCIONES CON RETORNO MÚLTIPLE
def dividir_y_resto(a, b):
    cociente = a // b
    resto = a % b
    return cociente, resto  # Retorna una tupla

# FUNCIONES SIN RETORNO (void)
def imprimir_lista(lista):
    for item in lista:
        print(item)
    # No hay return explícito

# EJEMPLOS DE USO:
# Llamada a función básica
saludar()  # Imprime: ¡Hola mundo!

# Llamada con argumento
saludar_persona("Ana")  # Imprime: ¡Hola Ana!

# Llamada con valor retornado
resultado = sumar(5, 3)  # resultado = 8

# Llamada con parámetro por defecto
saludar_formal("García")  # Usa el título por defecto
saludar_formal("García", "Dr.")  # Sobrescribe el título

# Llamada con múltiples parámetros
precio = calcular_precio(100, 0.21, 10)  # precio = 111

# Llamada con retorno múltiple
cociente, resto = dividir_y_resto(17, 5)  # cociente = 3, resto = 2

# Llamada a función void
imprimir_lista([1, 2, 3])  # Imprime cada elemento

# DOCUMENTACIÓN DE FUNCIONES
def calcular_area_triangulo(base, altura):
    """
    Calcula el área de un triángulo.
    
    Args:
        base (float): La base del triángulo
        altura (float): La altura del triángulo
    
    Returns:
        float: El área del triángulo
    """
    return (base * altura) / 2
