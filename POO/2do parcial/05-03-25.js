class Persona {
    static contador=0 //atributo estatico - fuera del constructor
    constructor(nombre, edad){ //atributos de instancia
        this.nombre=nombre;
        this.edad=edad;
        Persona.contador ++;
    }
        
     mostrarInformacion(){ //metodo
        return`nombre: ${this.nombre}, edad: ${this.edad}`
    }

    static obtenerTotalPersonas(){//metodo estatico
        return Persona.contador;
    }
}

//creacion de objeto persona 1
/*const persona1 = new Persona ("Moises", 18)
console.log(persona1.mostrarInformacion());

const persona2 = new Persona ("Sindy", 18)
console.log(persona2.mostrarInformacion());

//metodo estatico
console.log(Persona.obtenerTotalPersonas());*/

for(let i=0;i<=4;i++){
    const persona1 = new Persona (prompt("ingresa el nombre"), prompt("ingresa la edad"));
    console.log(persona1.mostrarInformacion());
}
console.log(`Total de personas: ${Persona.obtenerTotalPersonas()}`);
