class Autor{
    //propiedad privada
    #nombre;
    #apellidos;

    //constructor
    constructor(nombre,apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    //metodo privado
    mostrarAutor(){
        return`Autor: ${this.nombre} ${this.apellidos}`
    }

    //getter nombre
    get nombre(){
        return this.#nombre;
    }

    //setter nombre
    set nombre(nombreNuevo){
        if (!nombreNuevo || nombreNuevo.trim()==="") {
            throw new Error("El nombre debe ser una cadena válida");
        }
        this.#nombre = nombreNuevo.trim();
    }

    //getter apellido
    get apellidos(){
        return this.#apellidos;
    }

    //setter apellido
    set apellidos(apellidosNuevo){
        if (!apellidosNuevo || apellidosNuevo.trim()==="") {
            throw new Error("El nombre debe ser una cadena válida");
        }
        this.#apellidos = apellidosNuevo.trim();
    }  
}

class Libro extends Autor{
    //propiedad privada
    #titulo;
    #isbn
    #autor

    //constructor
    constructor(titulo,isbn,autor){
       this.titulo = titulo;
       this.isbn = isbn; 
       this.autor = autor;
    }
    
    // Método para mostrar información del libro
    mostrarLibro() {
        return `Título: ${this.titulo}, ISBN: ${this.isbn}, ${this.autor.mostrarAutor()}`;
    }

    // Getter y setter para título
    get titulo() {
        return this.#titulo;
    }

    set titulo(tituloNuevo) {
        if (!tituloNuevo || tituloNuevo.trim() === "") {
            throw new Error("El título no puede estar vacío");
        }
        this.#titulo = tituloNuevo.trim();
    }

// Getter y setter para ISBN
get isbn() {
    return this.#isbn;
}

set isbn(isbnNuevo) {
    if (!isbnNuevo || isbnNuevo.trim() === "") {
        throw new Error("El ISBN no puede estar vacío");
    }
    this.#isbn = isbnNuevo.trim();
}


}

class Articulo extends Libro{
    //propiedad privada
    #nombreRevista;

    //constructor
    constructor(nombreRevista, titulo, autor, isbn){
        super(titulo, isbn, autor);
        this.nombreRevista = nombreRevista;
    }

    //metodo privado
    #verArticulo() {
        return `${super.verLibro()} \n Revista: ${this.#nombreRevista}`;
    }

    get verArticulo(){
       return this.#verArticulo();
    }

    //getter nombreRevista
    get nombreRevista(){
        return this.nombreRevista;
    }

    //setter nombreRevista
    set nombreRevista(nombreRevistaNuevo){
       if (!nombreRevistaNuevo || nombreRevistaNuevo.trim()=="") {
            throw new Error("El nombre debe ser una cadena válida");
        }
        this.nombreRevista = nombreRevistaNuevo.trim(); 
    }
}

class Biblioteca{
#listaLibros;
    
    constructor() {
        this.#listaLibros = [];
    }
    
    agregarLibro(libro) {
        if (!(libro instanceof Libro)) {
            throw new Error("Solo se pueden agregar instancias de Libro o Artículo");
        }
        this.#listaLibros.push(libro);
        console.log("Libro agregado exitosamente.");
       }
    
    mostrarBiblioteca() {
    if (this.#listaLibros.length === 0) {
        console.log("La biblioteca está vacía.");
        return;
    }
        
    console.log("=== Libros en la biblioteca ===");
    this.#listaLibros.forEach((libro, index) => {
         console.log(`${index + 1}. ${libro.mostrarLibro()}`);
    });
    }

    borrarLibro(index){
        if (index < 0 || index >= this.#listaLibros.length) {
            throw new Error("Índice fuera de rango"); 
        }
        this.#listaLibros.splice(index, 1);
        console.log("Libro eliminado exitosamente.");
    }

    contarLibros(){
        return this.#listaLibros.length;
    }
}

function menu(){
   console.log("=== Menú === \n 1. Agregar Libro, \n 2. Agregar Articulo, \n 3. Mostrar Biblioteca, \n 4. Borrar Libro/Articulo, \n 5. Consultar cantidad de Libros/Articulos, \n 6. Salir" );
  
}

const libro= new Libro(prompt("Ingresa el titulo"), prompt("Ingresa el ISBN"), prompt("Ingresa el autor"));
const articulo = new Articulo(prompt("Ingresa el nombre de la revista"), prompt("Ingresa el titulo"), prompt("Ingresa el autor"), prompt("Ingresa el ISBN"));

function borrarLibro(biblioteca) {
    const titulo = prompt("Ingrese el título del libro a borrar:");
    biblioteca.borrarLibro(titulo);
}

