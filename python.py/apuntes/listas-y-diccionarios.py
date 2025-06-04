#-->Listas y diccionarios
# =================== GUÍA DETALLADA DE LISTAS ===================

# CREACIÓN DE LISTAS
# Las listas se pueden crear de varias formas:
# 1. Lista vacía: mi_lista = []
# 2. Lista con elementos: mi_lista = ["item1", "item2", "item3"]
# 3. Lista usando la función list(): mi_lista = list(("item1", "item2"))

# ACCESO A ELEMENTOS
# - Índices positivos: empiezan en 0 desde el principio
#   mi_lista[0] -> primer elemento
#   mi_lista[1] -> segundo elemento
# - Índices negativos: empiezan en -1 desde el final
#   mi_lista[-1] -> último elemento
#   mi_lista[-2] -> penúltimo elemento

# MODIFICACIÓN DE ELEMENTOS
# - Asignación directa: mi_lista[índice] = nuevo_valor
# - Para modificar varios elementos: mi_lista[0:2] = ["nuevo1", "nuevo2"]

# MÉTODOS DE LISTAS
# append(x) -> Añade un elemento al final de la lista
# insert(i,x) -> Inserta x en la posición i
# remove(x) -> Elimina la primera aparición del valor x
# pop([i]) -> Elimina y devuelve el elemento en la posición i (último si no se especifica)
# clear() -> Elimina todos los elementos
# sort() -> Ordena la lista
# reverse() -> Invierte el orden de los elementos

# OPERACIONES ÚTILES
# len(lista) -> Obtiene la longitud de la lista
# max(lista) -> Encuentra el valor máximo
# min(lista) -> Encuentra el valor mínimo
# sum(lista) -> Suma todos los elementos numéricos

# =================== GUÍA DETALLADA DE DICCIONARIOS ===================

# CREACIÓN DE DICCIONARIOS
# 1. Diccionario vacío: mi_dict = {}
# 2. Con elementos: mi_dict = {"clave1": valor1, "clave2": valor2}
# 3. Usando dict(): mi_dict = dict(clave1=valor1, clave2=valor2)

# ACCESO A VALORES
# 1. Usando corchetes: mi_dict["clave"]
#    - Lanza KeyError si la clave no existe
# 2. Usando get(): mi_dict.get("clave", valor_por_defecto)
#    - Retorna None o el valor_por_defecto si la clave no existe

# MODIFICACIÓN Y ADICIÓN
# - Modificar: mi_dict["clave_existente"] = nuevo_valor
# - Añadir: mi_dict["nueva_clave"] = valor
# - update(): mi_dict.update({"clave1": valor1, "clave2": valor2})

# ELIMINACIÓN
# - del mi_dict["clave"] -> Elimina un par clave-valor específico
# - pop("clave") -> Elimina y retorna el valor de la clave
# - popitem() -> Elimina y retorna el último par clave-valor
# - clear() -> Elimina todos los elementos

# MÉTODOS IMPORTANTES
# keys() -> Devuelve vista de todas las claves
# values() -> Devuelve vista de todos los valores
# items() -> Devuelve vista de todos los pares clave-valor
# copy() -> Crea una copia superficial del diccionario

# COMPROBACIONES ÚTILES
# - "clave" in mi_dict -> Comprueba si existe una clave
# - len(mi_dict) -> Número de pares clave-valor
# - dict.fromkeys(secuencia, valor) -> Crea diccionario desde secuencia de claves

# ITERACIÓN
# - for clave in mi_dict: -> Itera sobre las claves
# - for clave, valor in mi_dict.items(): -> Itera sobre claves y valores


# LISTAS
print("=== LISTAS ===")

# Crear una lista
frutas = ["manzana", "banana", "naranja", "pera"]
print("\nLista original:", frutas)

# Acceder a elementos
print("\nAcceder a elementos:")
print("Primer elemento:", frutas[0])
print("Último elemento:", frutas[-1])

# Modificar elementos
frutas[1] = "uva"
print("\nLista después de modificar:", frutas)

# Añadir elementos
frutas.append("mango")
print("\nLista después de append():", frutas)

# Eliminar elementos
frutas.remove("naranja")
print("\nLista después de remove():", frutas)

# DICCIONARIOS
print("\n=== DICCIONARIOS ===")

# Crear un diccionario
estudiante = {
    "nombre": "Ana",
    "edad": 20,
    "cursos": ["Python", "JavaScript", "HTML"]
}
print("\nDiccionario original:", estudiante)

# Acceder a valores
print("\nAcceder a valores:")
print("Nombre:", estudiante["nombre"])
print("Edad:", estudiante.get("edad"))

# Modificar valores
estudiante["edad"] = 21
print("\nDiccionario después de modificar:", estudiante)

# Añadir nuevos pares clave-valor
estudiante["ciudad"] = "Madrid"
print("\nDiccionario después de añadir:", estudiante)

# Eliminar pares clave-valor
del estudiante["cursos"]
print("\nDiccionario después de eliminar:", estudiante)

# Métodos útiles de diccionarios
print("\nMétodos de diccionarios:")
print("Claves:", list(estudiante.keys()))
print("Valores:", list(estudiante.values()))
print("Pares clave-valor:", list(estudiante.items()))