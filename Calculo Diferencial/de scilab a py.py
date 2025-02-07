import numpy as np
import matplotlib.pyplot as plt

title = input("ingresa el titulo de a grafica: ")
funcion = input("Ingresa la función en términos de 'x': ")
limin = float(input('Ingresa el límite inferior: '))
limsu = float(input('Ingresa el límite superior: '))

x = np.arange(limin, limsu, 0.01)
y = np.array([eval(funcion, {"x": val, "np": np}) for val in x])

plt.plot(x, y, color='red', linewidth=4)
plt.grid(True, linestyle='--', linewidth=0.7, alpha=0.7)
plt.xlabel('x')
plt.ylabel('y')
plt.title(title)
plt.grid(True)
plt.show()
