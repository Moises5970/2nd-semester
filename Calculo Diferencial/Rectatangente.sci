//Comandos para limpiar la gráfica y la consola cada vez que se ejecuta el programa.
clc
clear
clf

//Se ingresa la función con “y”
y=input('Ingresar función: ')
deff('y=f(x)',y)

//Se pide ingresar los limites 
a=input('Límite inferior:')
b=input('Límite superior:')
x=[a:0.1:b];
y=f(x);

//Imprimir x y y, con los ejes en el centro y la cuadricula.
plot(x,y,'b--')
a=gca(); a.x_location='origin';a.y_location='origin';
xgrid(3)

//Se pide el punto x1
x1=input('Ingresa el valor de la abscisa para el punto de tangencia x1: ')
m=numderivative(f,x1)
tangente=m*(x-x1)+f(x1)
plot(x,tangente, 'r','thickness',2)

//Calcula el valor de la Recta tangente y la imprime en la consola
x=poly(0,'x')
tangente=m*(x-x1)+f(x1)
disp('La recta tangente es y: ')
disp(tangente)

//Calcula el valor de la Recta normal y la imprime en la consola
normal=(-1./m)*(x-x1)+f(x1)
disp('La recta normal es y: ')
disp(normal)
