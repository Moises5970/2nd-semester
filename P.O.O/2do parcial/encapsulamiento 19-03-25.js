class Persona{
    //propiedades encapsuladas
    #nombre;
    #edad;

    //contrusctor para inicializar las propiedades
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    //Metodo publico para el nombre
    obtenerNombre(){
        return this.#nombre;
    }

    //Metodo publico para la edad
    obtenerEdad(){
        return this.#edad;
    }
}
// Crear una instancia de la clase Persona
const persona1 = new Persona("Ana", 25);

// Acceder a los métodos públicos para obtener los datos
console.log(persona1.obtenerNombre()); // "Ana"
console.log(persona1.obtenerEdad());  // 25