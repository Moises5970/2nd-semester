//Ejemplo 1
// Clase que representa un procesador
class Procesador {
    constructor(modelo){
        this.modelo = modelo; // Almacena el modelo del procesador
    }
    // Método que devuelve la potencia del procesador
    verPotencia() {
        console.log(`el procesador es: ${this.modelo}`);
    }
}

// Clase que representa una computadora
class Computadora {
    // Constructor que recibe la cantidad de RAM, ROM y crea un procesador
    constructor(ram, rom) {
        this.ram = ram; // Almacena la memoria RAM
        this.rom = rom; // Almacena la memoria ROM (almacenamiento)
        this.procesador = new Procesador(prompt("Ingrese el modelo del procesador")); // Composición: la computadora tiene un procesador
    }

    // Método para ver la información general de la computadora, incluyendo la potencia del procesador
    verInformacion() {
        // Retorna un texto con la información de la RAM, ROM y llama al método del procesador para mostrar su potencia
        console.log(`El computador tiene una ram de ${this.ram} GB y una rom de ${this.rom} GB y `);
        this.procesador.verPotencia();
    }
}

// Se crea una nueva instancia de la clase Computadora con 8 GB de RAM y 512 GB de ROM
const computadora = new Computadora(8, 512);
// Se muestra la información de la computadora en la consola
computadora.verInformacion();


//Ejemplo 2
// Clase que representa una dirección
class Direccion {
    constructor(calle, ciudad){
        this.calle = calle; // Almacena el nombre de la calle
        this.ciudad = ciudad; // Almacena el nombre de la ciudad
    }

    // Método que muestra la dirección completa
    mostrarDireccion(){
        console.log(`Vive en ${this.calle}, ${this.ciudad}`);
    }
}

// Clase que representa una persona
class Persona {
    // Constructor que recibe el nombre, edad y crea una dirección
    constructor(nombre, edad){
        this.nombre = nombre; // Almacena el nombre de la persona
        this.edad = edad; // Almacena la edad de la persona
        this.direccion = new Direccion(prompt("Ingrese la calle:"), prompt("Ingrese la ciudad:")); // Composición: la persona tiene una dirección
    }

    // Método para ver la información general de la persona, incluyendo su dirección
    mandarNotificacion(){
        // Muestra nombre, edad y llama al método de dirección para mostrar la dirección completa
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad} años`);
        this.direccion.mostrarDireccion();
    }
}

// Se crea una nueva instancia de la clase Persona con nombre y edad
const persona1 = new Persona("Moisés", 25);
// Se muestra la información de la persona en la consola
persona1.mandarNotificacion();


//Ejemplo 3
// Clase que representa una bebida
class Bebida {
    constructor(nombre){
        this.nombre = nombre; // Almacena el nombre de la bebida
    }

    // Método que muestra qué bebida se está sirviendo
    servir(){
        console.log(`Sirviendo una bebida de ${this.nombre}`);
    }
}

// Clase que representa una taza
class Taza {
    // Constructor que recibe el color de la taza y crea una bebida
    constructor(color){
        this.color = color; // Almacena el color de la taza
        this.bebida = new Bebida(prompt("¿Qué bebida quieres?")); // Composición: la taza tiene una bebida
    }

    // Método para mostrar la información de la taza y servir la bebida
    usarTaza(){
        // Muestra el color de la taza y llama al método de bebida para servirla
        console.log(`Taza de color ${this.color}`);
        this.bebida.servir();
    }
}

// Se crea una nueva instancia de la clase Taza con color blanco
const miTaza = new Taza("blanco");
// Se muestra la información de la taza y la bebida que contiene
miTaza.usarTaza();
