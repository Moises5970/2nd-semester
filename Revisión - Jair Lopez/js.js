class Coche{ //se crea la clase
    constructor(marca){ //se hace el contructor - llaves
    this.marca=marca;} // atributo


encender(){ //se hace el metodo
    return`Este carro ${this.marca} esta encendido`
                //se retorna el metodo con un mensaje
}
}

const carro1 = new Coche (Toyota) //se instancia un objeto

console.log(carro1.encender);
