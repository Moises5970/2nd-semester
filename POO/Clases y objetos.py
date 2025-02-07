class Casa:
    #tamaño y colo de una casa
    def __init__(self,tamaño, color):
        self.tamaño = tamaño
        self.color = color
        
casa1 = Casa("Grande", "Rojo")
print(casa1.tamaño,casa1.color)

casa1 = Casa("Mediana", "Verde")
print(casa1.tamaño,casa1.color)

casa1 = Casa("Pequeña" ,"Azul")
print(casa1.tamaño,casa1.color)

print("_________________________")

class Computadora:
    #Gama, tipo y costo de una computadora
    def __init__(self, gama, tipo, costo):
        self.gama = gama
        self.tipo = tipo
        self.costo  = costo
        
computadora1 = Computadora("Alta", "Escritorio","Cara")
print(computadora1.gama,computadora1.tipo,computadora1.costo)

computadora2 = Computadora("Media", "Gamer","Accesible")
print(computadora2.gama,computadora2.tipo,computadora2.costo)

computadora3 = Computadora("Baja" ,"Laptop","Barata")
print(computadora3.gama,computadora3.tipo,computadora3.costo)

print("_________________________")

class Comida:
    #Tipo, cantidad y tiempo de la comida
    def __init__(self, tipo, cantidad, tiempo):
        self.tipo = tipo
        self.cantidad = cantidad
        self.tiempo = tiempo
        
comida1 = Comida("Desayuno","Media","Mañana")
print(comida1.tipo,comida1.cantidad,comida1.tiempo)

comida2 = Comida("Almuerzo","Grande","Tarde")
print(comida2.tipo,comida2.cantidad,comida2.tiempo)

comida3 = Comida("Cena","Pequeña","Noche")
print(comida3.tipo,comida3.cantidad,comida3.tiempo)

print("_________________________")

class Planes:
    #Planes o becas
    def __init__(self, plan, duracion, trabajo):
        self.plan = plan
        self.duracion = duracion
        self.trabajo = trabajo
    
plan1 = Planes("Industrial","1 año"," 8 h diarias")
print(plan1.plan,plan1.duracion,plan1.trabajo)

plan2 = Planes("Emprendedor", "1 o 2 años", "4/8 horas")
print(plan2.plan,plan2.duracion,plan2.trabajo)

plan3 = Planes("Normal", "Duracion de su carrera", "2 horas")
print(plan3.plan,plan3.duracion,plan3.trabajo)

plan4 = Planes("Externo","Lo que le plazca","Null")
print(plan4.plan,plan4.duracion,plan4.trabajo)

print("_________________________")

class Ropa:
    #Clasificacion de ropa
    def __init__(self, talla, genero, tipo):
        self.talla = talla
        self.genero = genero
        self.tipo = tipo

ropa1 = Ropa("Grande","Hombre","Camisa")
print(ropa1.talla,ropa1.genero,ropa1.tipo)

ropa2 = Ropa("Chica","Unisex","Chaqueta")
print(ropa2.talla,ropa2.genero,ropa2.tipo)

ropa3 = Ropa("Mediana","Mujer","Falda")
print(ropa3.talla,ropa3.genero,ropa3.tipo)

print("_________________________")