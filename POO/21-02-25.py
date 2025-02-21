class Compra:
    def __init__(self, tipo, precio):
        self.tipo=tipo
        self.precio = precio

    def vender (self): 
        return f'La {self. tipo} cuesta $ {self.precio}'

producto1 = Compra ("tablet", 4800)

producto2 = Compra("computadora", 30000)

print(producto1.vender())
print(producto2.vender())