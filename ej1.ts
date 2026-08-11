class Producto {
    nombre: String;
    precio: Number;
    categoria: String;
    stock: Number;

    constructor(nombre: String, precio: Number, categoria: String, stock: Number) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

     describir(): String {
        return `nombre: ${this.nombre}, precio: ${this.precio}, categoria: ${this.categoria}, stock: ${this.stock}`
    }
};

const producto = new Producto("Mouse", 20000, "Electronica", 10);
console.log(producto.describir());

