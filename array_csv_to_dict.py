"""Resolviendo el reto:

    Aquí la solución al reto de convertir
    un array de arrays retornado por CSV
    a un array de diccionarios, de forma dinámica,
    es decir sin importar la cantidad de columnas.
"""

def array2Dict(header, arr):
    final_dict = {}
    for index in range(0, len(header)):
        final_dict[header[index]] = arr[index]

    return final_dict


def csvArray2DictArray(csv_array):
    final_array = []
    keys = csv_array[0]
    count = 0
    for item in csv_array:
        if count == 0:
            count += 1
        else:
            final_array.append(array2Dict(keys, item))
    return final_array


csv_array1 = [
    ["id", "nombre", "description"],
    [1, "pepa", "Pig"],
    [2, "tulio", "triviño"],
    [3, "hello", "kitty"]
]


print(csvArray2DictArray(csv_array1))

# Variando el contenido del array por otro distinto
csv_array2 = [
    ["num", "name", "appat","by"],
    [1, "pepa", "Pig", "Nick"],
    [2, "tulio", "triviño", "Chile"],
    [3, "hello", "kitty", "Sanrio"],
    [4, "Ka", "Blam!", "MtV"]
]


print(csvArray2DictArray(csv_array2))