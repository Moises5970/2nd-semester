class Muisca{
    //Propiedad privada
    #autor;

    //constructor
    constructor(nombre,autor){
        this.nombre = nombre;
        this.autor = autor;
    }

    //Metodo publico
    verInfo(){
        return `La pieza se llama ${this.nombre}`
    }

    //Metodo privado
    #verAutor(){
        return `El autor de la pieza es ${this.autor}`
    }

    // Acceder a la propiedad privada (getter)
    get autor() {
        return this.#autor; // Retornar el valor de la propiedad privada
    }

    // Modificar la propiedad privada (setter)
    set autor(nuevoAutor) {
        if (!nuevoAutor || nuevoAutor.trim() === "") {
            throw new Error("El nombre no puede estar vacío.");
          }
          this.#autor = nuevoAutor.trim().toUpperCase(); // Cambiar el valor del nombre si es válido. Elimina espacios y convierte a mayusculas
    }

    //metodo publico para acceder al metodo privado
    verCompleto(){
        return `${this.verInfo()} y ${this.#verAutor()}`
    }

    //getter para el metodo privado
    get infoAutor() {
        return `Su autor es ${this.#autor}`;
    }

    /*class Fecha extends Musica {
        constructor(nombre, autor, fecha) {
            this.nombre = nombre.trim().toUpperCase();
            this.autor = autor.trim().toUpperCase(); // Asignar el valor a la propiedad privada
            this.fecha = fecha.trim();
    }*/
}

//Intanciando objetos y utilizando los metodos
const pieza1 = new Musica("Sinfonia No. 9", "Beethoven", 1824);
const pieza2 = new Musica("Concierto de Aranjuez", "Joan Sebastian", 1939);

//con metodo publico
console.log(pieza1.verCompleto());
console.log(pieza2.verCompleto());

//con getter para el metodo privado
console.log(pieza1.infoAutor);
console.log(pieza2.infoAutor);

//cambiar el autor con setter
pieza1.autor = prompt("Ingrese el nombre completo del autor");
console.log(pieza1.verCompleto());
pieza2.autor = prompt("Ingrese el nombre completo del autor");
console.log(pieza2.verCompleto());