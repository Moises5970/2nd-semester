deff('y=f(x)','y=x.^2+4*x-3')//definicion de la funcion
x=[-5:0.01:3];//definiendo vaolres de x
y=f(x);//evaluando en y
tabla=[x;y]'//creando tabla
plot(x,y,'r')//graficar
xgrid(3)//colocar cuadricula
a=gca(); a.x_location = "origin"; a.y_location = "origin";//coloca los ejes
