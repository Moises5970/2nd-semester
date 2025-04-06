//Ejemplo 1
class Comida {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInfo() {
        return `El platillo es ${this.nombre} y tiene un precio de ${this.precio}`;
    }
}

class Picante extends Comida {
    constructor(nombre, precio, picante) {
        super(nombre, precio);
        this.picante = picante;
    }

    mostrar() {
        console.log(`${super.mostrarInfo()} y tiene ${this.picante} de picante`);
    }
}

class Cantidad extends Comida {
    constructor(nombre, precio, cantidad) {
        super(nombre, precio);
        this.cantidad = cantidad;
    }
    mostrarTotal() {
        console.log(`${super.mostrarInfo()} y es ${this.cantidad}`);
    }
}

let seguir = true;
do {
    let option = parseInt(prompt("Ingrese un número del 1 al 3 y 4 para salir"));
    switch (option) {
        case 1:
            const comida = new Comida(prompt("Ingrese la comida"), parseInt(prompt("Ingrese el precio")));
            console.log(comida.mostrarInfo());
            break;
        case 2:
            const comida1 = new Picante(prompt("Ingrese la comida"), parseInt(prompt("Ingrese el precio")), prompt("Ingrese lo picante"));
            comida1.mostrar();
            break;
        case 3:
            const comida2 = new Cantidad(prompt("Ingrese la comida"), parseInt(prompt("Ingrese el precio")), prompt("Ingrese la cantidad"));
            comida2.mostrarTotal();
            break;
        case 4:
            seguir = false;
            alert("Saliendo del programa");
            break;
        default:
            console.log("Caracter no válido");
            seguir = false; // Salir del bucle si la opción no es válida
            break;
    }
} while (seguir);

//Ejemplo 2

/*class Clases{
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    }
    calsesInfo(){
        return (`La clase ${this.nombre} dura ${this.duracion} hora(s)`);
    }
}

class AntesHoraPoder extends Clases{
    constructor(nombre, duracion, numero){
        super(nombre, duracion);
        this.numero = numero;
    }
    mostrarClaseA(){
        console.log(`${super.calsesInfo()} y es la numero ${this.numero}`);
    }
}

class DespuesHoraPoder extends Clases {
    constructor(nombre, duracion, tipo) {
        super(nombre, duracion);
        this.tipo = tipo;
    }
    mostrarClaseB() {
        console.log(`${super.calsesInfo()} y es ${this.tipo}`);
    }
}

const clase1 = new AntesHoraPoder(prompt("Ingrese la clase antes de la hora de poder"), prompt("Ingrese la duracion"), prompt("Ingrese el numero de clase"));
clase1.mostrarClaseA();

const clase2 = new DespuesHoraPoder(prompt("Ingrese la clase despues de la hora de poder"), prompt("Ingrese la duracion"), prompt("Ingrese el tipo de clase"));
clase2.mostrarClaseB();

//Ejemplo 3

class Musica{
    constructor(nombre, compositor){
        this.nombre = nombre;
        this.compositor = compositor;
    }
    infoPieza(){
        return (`${this.nombre} la compuso ${this.compositor}`);
    }
}

class Sacra extends Musica{
    constructor(nombre, compositor, duracion){
        super(nombre, compositor);
        this.duracion = duracion;
    }

    mostrarDuracion(){
        console.log(`${super.infoPieza()} y tiene ${this.duracion} de duracion`);        
    }
}

class Secular extends Musica {
    constructor(nombre, compositor, genero) {
        super(nombre, compositor);
        this.genero = genero;
    }
    mostrarGenero() {
        console.log(`${super.infoPieza()} y es ${this.genero}, no es recomendable`);
    }
}

const pieza1 = new Sacra(prompt("Ingrese la pieza"), prompt("Ingrese el compositor"), prompt("Ingrese lo duracion"));
pieza1.mostrarDuracion();

const pieza2 = new Secular(prompt("Ingrese la pieza"), prompt("Ingrese el compositor"), prompt("Ingrese el genero"));
pieza2.mostrarGenero();*/