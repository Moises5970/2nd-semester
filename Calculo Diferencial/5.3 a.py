import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 10, 0.5)
y = (x * x) - (8 * x) + 9

x1 = np.arange(0, 10, 0.5)
y1 = -2 * x

# Intersección
xi = 3
yi = -6

plt.plot(x, y, label='(x*x)-(8*x)+9')
plt.plot(x1, y1, label='-2*x')
plt.scatter(xi, yi, color='red', label='Intersección (3,-6)')

plt.xlabel('lado x')
plt.ylabel('lado y')
plt.title('ejercicios 5.3 b')
plt.legend()
plt.grid(True)
plt.show()
