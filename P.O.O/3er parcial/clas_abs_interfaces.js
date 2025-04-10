// clase abstracta
class Bocina{
    constructor(){
        if(this.constructor === Bocina){
            throw new Error("No se puede instanciar una clase abstracta.");
        }
    }
    encender(){
        throw new Error("Método abstracto 'enceder' debe ser implementado.");
    }
    hacerSonido(){
        throw new Error("Método abstracto 'hacerSonido' debe ser implementado."); 
    }
    apagar(){
        throw new Error("Método abstracto 'apagar' debe ser implementado.");
    }
}

class JBL{
    constructor(marca,color,modelo){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
    }
    encender(){
        console.log(`Encendiendo bocina ${this.marca}`);
    }
    hacerSonido(){
        console.log(`Reporduciendo musica en la bocina JBL ${this.color}`);
    }
    apagar(){
        console.log(`Apagando bocina JBL ${this.modelo}`);
    }
}

const bocina1 = new JBL("JBL","rojo","Go 4");
bocina1.encender();
bocina1.hacerSonido();
bocina1.apagar();