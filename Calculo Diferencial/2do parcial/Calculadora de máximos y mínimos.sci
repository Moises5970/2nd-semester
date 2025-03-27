clc;clear;clf

//Graficación de la función
y=input('Ingrese un polinomio: ')
a=input('Limite inferior para graficacion: ')
b=input('Limite superior para graficacion: ')
deff('y=f(x)',y);
x=linspace(a,b,100);
y=f(x);
plot(x,f,'g')
a=gca(); a.x_location="origin"; a.y_location="origin";
xtitle('Extremos realitivos de un polinomio')

//Derivada simbolica
x=poly(0,'x');
y=f(x);
yp=derivat(y)
disp('La derivada es dy/dx =')
disp(yp)

//Calculo de valores criticos
disp('Los valores criticos son:')
R=real(roots(yp))
disp(R)

//Calculo de los extremos relativos
disp('Los extremos relativos en coordenadas (x,y)')
ext= f(R)
printf('...(%.2f,%2f)\n',R,ext)
