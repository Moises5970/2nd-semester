class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    verInformacion(){
        return`Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    ladrar(){
        console.log(`${super.verInformacion()} y soy de raza ${this.raza} \n woof woof` );
    }
}

class Gato extends Animal{
    constructor(especie, edad, color, sexo){
        super(especie, edad, color);
        this.sexo = sexo;
    }
    maullar(){
        console.log(`${super.verInformacion()} y soy ${this.sexo} \n miau miau`);
    }
}

const animal1 = new Perro("Perro", prompt("Ingrese la edad del perro"), prompt("Ingrese el color del perro"), prompt("Ingrese la raza del perro"));
animal1.ladrar();

const animal2 = new Gato("Gato", prompt("Ingrese la edad del gato"), prompt("Ingrese el color del gato"), prompt("Ingrese el sexo del gato"));
animal2.maullar();