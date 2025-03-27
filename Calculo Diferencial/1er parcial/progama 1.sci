clear
clc

//ingresar funciom desde el teclado
y=input("Ingrese la fucion a evaluar:")
deff('y=f(x)', ['y=' y])

//ingresa datos para el intervalo de grafiacion
a=input("Limite inferior de graficacion")
b=input("Limite superior de graficacion")

//etapa de graficacion
clf
x=[a:0.1:b]
plot(x,f,'b*-*')
a=gca();a.x_location+"origin";a.y_location="origin";
xgrid(6)

[x:f(x)]'
