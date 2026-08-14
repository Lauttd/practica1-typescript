class Persona {
  private readonly dni: string;
  public nombre: string;
  private _edad: number = 0;
  private _email: string = "";

  constructor(dni: string, nombre: string, edadInicial: number, emailInicial: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edadInicial;
    this.email = emailInicial;
  };

  get edad(): number {
    return this._edad;
  };

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("La edad no puede ser negativa ni mayor a 120.");
    };
    this._edad = valor;
  };

  get email(): string {
    return this._email;
  };

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El formato del email es inválido (debe contener '@').");
    };
    this._email = valor;
  };

  get esMayorDeEdad(): boolean {
    return this._edad >= 18;
  };

  get datosPublicos(): string {
    return `Nombre: ${this.nombre} - Es mayor de edad: ${this.esMayorDeEdad}`;
  };
};

const persona1 = new Persona("46393807", "Lautaro", 22, "lautaro@gmail.com");

console.log("Datos Iniciales");
console.log("Edad:", persona1.edad);
console.log("Email:", persona1.email);
console.log("¿Mayor de edad?:", persona1.esMayorDeEdad);
console.log("Datos públicos:", persona1.datosPublicos);

persona1.edad = 25;
persona1.email = "contacto@syntaxtech.com";

console.log("Datos Actualizado");
console.log("Nueva edad:", persona1.edad);
console.log("Nuevo email:", persona1.email);
