clc
clear
clf

y=input('Ingresar funcion: ')
deff('y=f(x)',y)
a=input('Limite inferior:')
b=input('Limite superior:')
x=[a:0.1:b];
y=f(x);
plot(x,y,'g*-')
a=gca(); a.x_location='origin';a.y_location='origin';
xgrid(4)

x1=input('Ingreses el valor de la abcisa para el punto de tangencia x1: ')
m=numderivative(f,x1)
tangente=m*(x-x1)+f(x1)
plot(x,tangente, 'r--')

x=poly(0,'x')
tangente=m*(x-x1)+f(x1)
disp('La recta tangente es y: ')
disp(tangente)

normal=(-1./m)*(x-x1)+f(x1)
disp('La recta normal es y: ')
disp(normal)
