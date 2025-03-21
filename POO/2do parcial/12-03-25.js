class Person {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        return`Hola, mi nombre es ${this.nombre}`;
    }
}
const persona = new Person("Juan");

class Alumno extends Person {
    constructor(nombre, curso) {
        super(nombre);
        this.curso = curso;
    }
    presentarse(){
        console.log(`${super.presentarse()} y estoy en el curso de ${this.curso}`);
    }
}

const alumno = new Alumno("Juan","P.O.O");
alumno.presentarse();
