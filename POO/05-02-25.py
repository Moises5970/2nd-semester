#Clase 1

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def hablar(self):
        print(f"{self.nombre} de {self.edad} años está hablando")

    def caminar(self):
        print(f"{self.nombre} de {self.edad} años está caminando")

nom1= input('Ingresa el nombre 1: ')
edad1= input('Ingresa la edad 1: ')
nom2= input('Ingresa el nombre 2: ')
edad2= input('Ingresa la edad 2: ')

persona1 = Persona(nom1, edad1)
persona2 = Persona(nom2, edad2)

persona1.hablar()
persona2.caminar()

#Clase 2

class Animal:
    def __init__(self, especie, raza):
        self.especie = especie
        self.raza = raza

    def comer(self):
        return f'El {self.especie} {self.raza} está comiendo'

    def dormir(self):
        return f'El {self.especie} {self.raza} está durmiendo'

ani1=input('Ingresa el animal 1: ')
raz1=input('Ingresa la raza del primer animal: ')
ani2=input('Ingresa el animal 2: ')
raz2=input('Ingresa la raza del segundo animal: ')

animal1 = Animal(ani1, raz1)
animal2 = Animal(ani2, raz2)

animal1.comer()
animal2.dormir()

#Clase 3

class Libro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def leer(self):
        return f'Estás leyendo {self.titulo} de {self.autor}'

    def resumen(self):
        return f'Tu resumen de {self.titulo} de {self.autor} es muy corto'

lib1 = input('Ingresa el libro 1: ')
autor1 = input('Ingresa el primer autor: ')
lib2 = input('Ingresa el libro 2: ')
autor2 = input('Ingresa el segundo autor: ')

libro1 = Libro(lib1, autor1)
libro2 = Libro(lib2, autor2)

libro1.leer()
libro2.resumen()