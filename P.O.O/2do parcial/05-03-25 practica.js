let contador1=5;
console.log(`Total de animales en el zoologico: ${contador1}`);

class Animal{
    static contador=contador1;
    constructor(nombre, raza){
        this.nombre=nombre;
        this.raza=raza;
        Animal.contador--;
    }

    animalInformacion(){
        return`nombre: ${this.nombre}, raza: ${this.raza}`
    }

    static cuantosAnimalesQuedan(){
        return Animal.contador;
    }
}


/*const animal1 = new Animal (prompt("ingresa el nombre"), prompt("ingresa la raza"));
console.log(animal1.animalInformacion());*/

for(let i=0;i<4;i++){
    const animal1 = new Animal (prompt("ingresa el nombre"), prompt("ingresa la raza"));
    console.log(animal1.animalInformacion());
    console.log(`Animales actuales ${Animal.cuantosAnimalesQuedan()}`);
    
}

console.log(`Total de animales que quedan en el zoologico: ${Animal.cuantosAnimalesQuedan()}`);