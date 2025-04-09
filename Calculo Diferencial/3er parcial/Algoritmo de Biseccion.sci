clc; clear;clf;
// definición de los parámetros
y=input('Ingresa la funcion: ')
deff('y=f(x)',y);
disp("Cálculo de raíces de y=7*sin(x)+x^2-4")
disp('-----------------------------------------')
a=input(' Ingrese el valor de a: ');
b=input(' Ingrese el valor de b: ');
e=input(' Ingrese el valor del error: ');
ea=10;//inicio de variable auxiliar para el error
ra=0;// inicio de variable auxiliar para raíz
i=0;// inicia contador de iteraciones
//algoritmo de bisección
disp('-----------------------------------------')
printf(' i a b ra')
disp('-----------------------------------------')
if f(a)*f(b)<0
    while (ea>e)
        i=i+1;
        rx=ra;
        ra=(a+b)/2; //fórmula
        printf('\n %d %f %f %f',i,a,b,ra)
    if f(a)*f(ra)<0 //condición
       b=ra;
    else
        a=ra;
    end
    ea=abs(rx-ra);
    end
    disp('-----------------------------------------')
    printf('\n Raíz en %.6f,en %4d iteraciones',ra,i);
else
printf('no hay raíz en [a,b]');
end
//graficación de la función en el intervalo[a,b]
x= linspace(-5,5,100); y= f(x);plot(x,y)
a=gca();a.x_location='origin'; a.y_location='origin';
