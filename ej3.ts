class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    };
    
    calcularSueldo(): number {
        return 0
    };

    describir(): string {
        return (`Nombre: ${this.nombre}, Antiguedad: ${this.antiguedad}, Sueldo: ${this.calcularSueldo()}`);
    };
}; class EmpleadoFijo extends Empleado {
    sueldoBase: number;

    constructor( nombre: string, antiguedad: number = 2, sueldoBase: number = 1000) {
        super(nombre, antiguedad)
        this.sueldoBase = sueldoBase;
    };

    calcularSueldo(): number { 
        const bono = this.sueldoBase * 0.02 * this.antiguedad;
        return this.sueldoBase + bono;
    };
};

const empleado1 = new Empleado("Lautaro", 2)
const empleado2 = new EmpleadoFijo("Lautaro", 5)
console.log(empleado1.describir());
console.log(empleado2.describir());