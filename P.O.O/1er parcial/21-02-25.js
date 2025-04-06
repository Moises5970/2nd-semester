class Compra{
    constructor(tipo,precio){
        this.tipo=tipo
        this.precio=precio
    }
    vender(){
        return `La ${this.tipo} cuesta ${this.precio}`;}
}

const producto1 = new Compra("tablet", 4800);
const producto2 = new Compra("computadora", 30000);

console.log(producto1.vender());
console.log(producto2.vender());