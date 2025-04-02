// Clase principal que representa una pieza musical básica
class MusicalPiece {
    // Constructor: inicializa una pieza musical con nombre y autor
    constructor(name, author) {
      this.name = name;      // Nombre de la pieza musical
      this.author = author;  // Autor/Compositor de la pieza
    }
  
    // Método para mostrar la información básica de la pieza
    displayInfo() {
      console.log(`Piece: ${this.name} - Author: ${this.author}`);
    }
  }
  
  // Clase que extiende MusicalPiece para incluir información de género
  class Genre extends MusicalPiece {
    // Constructor: inicializa con nombre, autor y género musical
    constructor(name, author, genre) {
      super(name, author);  // Llama al constructor de la clase padre
      this.genre = genre;   // Género musical (ej: Clásico, Jazz, Rock)
    }
  
    // Método para mostrar el género de la pieza musical
    displayGenre() {
      console.log(`Genre: ${this.genre}`);
    }
  }
  
  // Creación de instancias (objetos) de piezas musicales
  const piece1 = new MusicalPiece("Sonata", "Antonio Vivaldi");  // Pieza sin género
  const piece2 = new Genre("Four Seasons", "Antonio Vivaldi", "Classical"); // Pieza con género
  
  // Mostrar información de las piezas
  piece1.displayInfo();      // Muestra solo nombre y autor
  piece2.displayInfo();      // Muestra nombre y autor (heredado)
  piece2.displayGenre();     // Muestra el género adicional