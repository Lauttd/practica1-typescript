 import { Empleado } from './ej3.ts';

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    valorHora: number;

    constructor( nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number, ) {
        super(nombre, antiguedad)
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    };

    calcularSueldo(): number {
        const sueldoEmpleadoHora = this.horasTrabajadas * this.valorHora
        return sueldoEmpleadoHora;
    };
};

class EmpleadoPorComision extends Empleado {
    ventasDelMes: number;
    porcentajeComision: number;

    constructor( nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number, ) {
        super(nombre, antiguedad)
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    };

    calcularSueldo(): number {
        const sueldoPorComision = this.ventasDelMes * this.porcentajeComision;
        return sueldoPorComision;
    };
};

class EmpleadoFijo extends Empleado {
    sueldoBase: number;

    constructor( nombre: string, antiguedad: number = 2, sueldoBase: number = 1000) {
        super(nombre, antiguedad)
        this.sueldoBase = sueldoBase;
    };
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Lautaro", 3, 500000),
  new EmpleadoPorHoras("Carlos", 1, 160, 3500),
  new EmpleadoPorComision("Sofia", 2, 2000000, 0.08),
  new EmpleadoFijo("Ana", 5, 600000),
  new EmpleadoPorHoras("Mateo", 0, 80, 4000),
  new EmpleadoPorComision("Lucas", 4, 1500000, 0.10)
];

for (const emp of empleados) {
    console.log(emp.describir());
};

function calcularNomina(empleados: Empleado[]): number {

    let totalNomina = 0;

    for ( const emp of empleados ) {
        totalNomina += emp.calcularSueldo();    
    } 

    return totalNomina;
};

const total = calcularNomina(empleados);
console.log("Total a pagar nomina: ", total) 