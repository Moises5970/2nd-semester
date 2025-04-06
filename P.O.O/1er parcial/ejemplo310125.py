class Persona:
    #constructor
    def __init__(self, nombre):
        self.nombre = nombre
    
    def saludar(self):
        #formato con fstring
        #print(f"Hola, soy{self.nombre}")
        #retornado mensaje
        return f"Hola, soy {self.nombre}"

persona1 = Persona("Moises")
mensaje = persona1.saludar()
print(mensaje)
