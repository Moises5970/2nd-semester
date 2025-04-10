// clase abstracta
class Bocina{
    constructor(){
        if(this.constructor === Bocina){
            throw new Error("No se puede instanciar una clase abstracta.");
        }
    }
    encender(){
        throw new Error("Método abstracto 'enceder' debe ser implementado.");
    }
    hacerSonido(){
        throw new Error("Método abstracto 'hacerSonido' debe ser implementado."); 
    }
    apagar(){
        throw new Error("Método abstracto 'apagar' debe ser implementado.");
    }
}

class JBL{
    constructor(marca,color,modelo){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
    }
    encender(){
        console.log(`Encendiendo bocina ${this.marca}`);
    }
    hacerSonido(){
        console.log(`Reporduciendo musica en la bocina JBL ${this.color}`);
    }
    apagar(){
        console.log(`Apagando bocina JBL ${this.modelo}`);
    }
}

const bocina1 = new JBL("JBL","rojo","Go 4");
bocina1.encender();
bocina1.hacerSonido();
bocina1.apagar();

//ejemplo 2
// Clase abstracta
class Vehiculo {
    constructor() {
        if (this.constructor === Vehiculo) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
    }

    arrancar() {
        throw new Error("Método abstracto 'arrancar' debe ser implementado.");
    }

    conducir() {
        throw new Error("Método abstracto 'conducir' debe ser implementado.");
    }

    detenerse() {
        throw new Error("Método abstracto 'detenerse' debe ser implementado.");
    }
}

// Clase concreta que implementa Vehiculo
class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super();
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    arrancar() {
        console.log(`El auto ${this.marca} ${this.modelo} está arrancando.`);
    }

    conducir() {
        console.log(`Conduciendo el ${this.marca} del año ${this.año}.`);
    }

    detenerse() {
        console.log(`El auto ${this.modelo} se ha detenido.`);
    }
}

// Crear una instancia de Auto
const miAuto = new Auto("Toyota", "Corolla", 2022);
miAuto.arrancar();
miAuto.conducir();
miAuto.detenerse();
