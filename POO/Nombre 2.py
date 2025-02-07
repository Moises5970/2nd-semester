class Persona:
    #constructor - espacio y doble gion bajo
    #Variable local - nombre
    def __init__(self,nombre):
        self.nombre = nombre

#Creacion de bjeto1
persona1 = Persona("Moises")

print(persona1.nombre)

#Creacion de bjeto2
persona2 = Persona("Ronald")

print(persona2.nombre)
