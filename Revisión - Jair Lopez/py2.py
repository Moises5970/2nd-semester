class Coche:
    def __init__(self,marca,color):
        self.marca=marca
        self.color=color
    
    def encender(self):
        return f"Este coche {self.marca} color {self.color} esta encendido"
    
my_car=Coche("Toyota","Azul")
print(my_car.encender())