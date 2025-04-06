class Planes:
    def __init__(self, plan, trabajo):
        self.plan = plan
        self.trabajo = trabajo
 
    def horas(self):
        return f"{self.plan} {self.trabajo} horas"
    
plan = input("Ingresa tu plan ")
trabajo = input("Ingresa tus horas ")
    
plan1 = Planes(plan, trabajo)
duracion = plan1.horas()
print(duracion)