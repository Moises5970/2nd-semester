// Clase Autor (Abstracción y Encapsulamiento)
class Autor {
    #nombre;
    #apellidos;

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    // Getter y setter para nombre
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombreNuevo) {
        if (!nombreNuevo || nombreNuevo.trim() === "") {
            throw new Error("El nombre no puede estar vacío");
        }
        this.#nombre = nombreNuevo.trim();
    }

    // Getter y setter para apellidos
    get apellidos() {
        return this.#apellidos;
    }

    set apellidos(apellidosNuevo) {
        if (!apellidosNuevo || apellidosNuevo.trim() === "") {
            throw new Error("Los apellidos no pueden estar vacíos");
        }
        this.#apellidos = apellidosNuevo.trim();
    }

    // Método para mostrar información del autor
    mostrarAutor() {
        return `${this.#nombre} ${this.#apellidos}`;
    }
}

// Clase Libro (Abstracción y Encapsulamiento)
class Libro extends Autor{
    #titulo;
    #isbn;

    //constructor de la clase Libro
    constructor(titulo, isbn, nombre, apellidos){
        super(nombre, apellidos);
        this.titulo = titulo;
        this.isbn = isbn;
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
    
        // Método para mostrar información del libro
        mostrarLibro() {
            return `Título: ${this.#titulo} \n ISBN: ${this.#isbn} \n Autor: ${this.mostrarAutor()}`;
        }
}

class Articulo extends Libro{
   #nombreRevista

   //constructor de la clase Articulo
   constructor(nombreRevista, titulo, isbn, nombre, apellidos){
     super(titulo, isbn, nombre, apellidos);
     this.nombreRevista = nombreRevista; 
   }

   // Getter y setter para nombreRevista
   get nombreRevista(){
    return this.#nombreRevista;
   }

   set nombreRevista(nombreRevistaNuevo){
    if (!nombreRevistaNuevo || nombreRevistaNuevo.trim() === "") {
        throw new Error("El nombre de la revista no puede estar vacío");
    }
    this.#nombreRevista = nombreRevistaNuevo.trim();
   }

   //sobreescribir el metodo mostrarLibro de la clase Libro
   mostrarLibro(){
    return`Revista: ${this.nombreRevista} \n Articulo: ${super.mostrarLibro()}`;
   }
}

class Biblioteca{
    #listaLibros;

    //constructor de la clase Biblioteca
    constructor(){
        this.#listaLibros = [];
    }

    //metodo para añadir un libro a la biblioteca
    agregarLibro(libro){
        if(!(libro instanceof Libro)){
            throw new Error("El objeto no es una instancia de Libro");
        }
        this.#listaLibros.push(libro);
        console.log('Libro/Articulo agregado exitosamente');        
    }

    //metodo para mostrar los libros de la biblioteca
    mostrarBiblioteca() {
        if (this.#listaLibros.length === 0) {
            console.log("No hay libros o articulos disponibles");
            return;
        }
    
        console.log("=== Libros/Artículos disponibles ===");
        this.#listaLibros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.mostrarLibro()}`);
        });
    }

    //borrar
    borrarLA(titulo){
        const index = this.#listaLibros.findIndex(libro => libro.titulo === titulo);
        if(index !== -1){
            this.#listaLibros.splice(index, 1);
            console.log("Libro/Artículo eliminado");
        }else{
            console.log(`Libro/Artículo con el titilo ${titulo} no encontrado)`);
        }
    }

    //contar libros
    contarLibros(){
        return this.#listaLibros.length;
    }
}

//mostrar menu
function mostrarMenu(biblioteca){
    let seguir = true;
    
    do{
        console.log("===== Biblioteca =====");
        const option = prompt("Seleccione una opción: \n 1. Agregar Libro, \n 2. Agregar Artículo, \n 3. Mostrar Biblioteca, \n 4. Borrar libro/artículo, \n 5. Contar libros, \n 6. Salir")

    switch(option){
        case "1":
            const tituloLibro = prompt("Ingrese el título del libro: ");
            const isbnLibro = prompt("Ingrese el ISBN del libro: ");
            const nombreAutorLibro = prompt("Ingrese el nombre del autor del libro: ");
            const apellidosAutorLibro = prompt("Ingrese los apellidos del autor del libro: ");
            // Crear una instancia de Libro antes de usarla
            const libro = new Libro(tituloLibro, isbnLibro, nombreAutorLibro, apellidosAutorLibro);

            biblioteca.agregarLibro(libro);
            break;
        case "2":
            const  nombreRevista = prompt("Ingrese el nombre de la revista: ");
            const tituloArticulo = prompt("Ingrese el título del artículo: ");
            const isbnArticulo = prompt("Ingrese el ISBN del artículo: ");
            const nombreAutorArticulo = prompt("Ingrese el nombre del autor del artículo: ");
            const apellidosAutorArticulo = prompt("Ingrese los apellidos del autor del artículo: ");
            const articulo = new Articulo(nombreRevista, tituloArticulo, isbnArticulo, nombreAutorArticulo, apellidosAutorArticulo);
            biblioteca.agregarLibro(articulo);
            break;
        case "3":
            biblioteca.mostrarBiblioteca();
            break;
        case "4":
            const tituloBorrar = prompt("Ingrese el título del libro/artículo a borrar: ");
            biblioteca.borrarLA(tituloBorrar);
            break;
        case "5":
            console.log(`La biblioteca tiene ${biblioteca.contarLibros()} libros/artículos`);
            break;
        case "6":
            seguir = false;
            console.log("Hasta la proxima");
            return;
        default:
            console.log(`Opción no válida`);
    }
}while(seguir);
}
//crear una instancia de la clase Biblioteca y mostrar el menu
const biblioteca = new Biblioteca();
mostrarMenu(biblioteca);
