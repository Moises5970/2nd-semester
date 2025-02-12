import numpy as np
import matplotlib.pyplot as plt

title = input("Ingresa el nombre de la función: ")
funcion = input("Ingresa la funcion: ")
limin = float(input("Ingresa el limite inferior: "))
limite = float (input("Ingresa el limite superior: "))

x = np.arange(limin,limite,0.01)
y= np.array([eval(funcion, {"x":val, "np":np}) for val in x])

#Graficas
plt.plot(x, y, color= "red", linewidth=3)
#cuadricula
plt.grid(True, linestyle='--')
#nombre de los ejes
plt.xlabel('x')
plt.ylabel('y')
plt.title(title) #nombre del grafico
plt.show()