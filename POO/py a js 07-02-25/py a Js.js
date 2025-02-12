class Animal{
    constructor(especie,raza){//Atributos
        this.especie = especie;
        this.raza = raza
    }
    comer(){
        return "El " + this.especie + " " + this.raza + " está comiendo"
    }
    dormir(){
        return "El " + this.especie + " " + this.raza + " está durmiendo "
    }
}

let anima1 = prompt("Ingresa el primer animal");
let raz1 = prompt("Ingresa su raza");
let anima2 = prompt("Ingresa el segundo animal");
let raz2 = prompt("Ingresa su raza");


//Uso de la clase
const animal1 = new Animal(anima1, raz1);
//console.log(animal1.comer());

const animal2 = new Animal(anima2, raz2);
//console.log(animal2.dormir());


class Libro{
    constructor(titulo,autor){//Atributos
        this.titulo = titulo;
        this.autor = autor
    }
    leer(){
        return "Estas leyendo " + this.titulo + " de " + this.autor
    }
    resumen(){
        return "El resumen de " + this.titulo + " de " + this.autor + " es muy corto"
    }
}

let lib1 = prompt("Ingresa el primer libro");
let autor1 = prompt("Ingresa su autor");
let lib2 = prompt("Ingresa el segundo libro");
let autor2 = prompt("Ingresa su autor");


//Uso de la clase
const libro1 = new Libro(lib1, autor1);
console.log(libro1.leer());

const libro2 = new Libro(lib2, autor2);
console.log(libro2.resumen());
