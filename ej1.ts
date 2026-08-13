class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precio: number,
    categoria: string,
    stock: number,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  describir(): String {
    return `nombre: ${this.nombre}, precio: ${this.precio}, categoria: ${this.categoria}, stock: ${this.stock}`;
  }

  hayStock(cantidad: number): boolean {
    return this.stock >= cantidad;
  }

  venderUnidades(cantidad: number) {
    if (this.hayStock(cantidad)) {
      this.stock = this.stock - cantidad;
    } else {
      console.log("No se vendio");
    }
  }

  aplicarDescuento(porcentaje: number): number {
    const descuento = (this.precio * porcentaje) / 100;
    return this.precio - descuento;
  }
}

const producto = new Producto("Mouse", 20000, "Electronica", 10);

console.log(producto.describir());
console.log("Hay stock para 15?: ", producto.hayStock(15));
producto.venderUnidades(5);
console.log(producto.describir());
console.log("Descuento del 15%: ", "$", producto.aplicarDescuento(15));


