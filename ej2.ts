class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[];

  constructor(titular: string, saldo: number = 20000) {
    this.titular = titular;
    this.saldo = saldo;
    this.historial = [];
  };    

  depositar(monto: number) {
    if (monto <= 0) {
      throw new Error("Error deposite un monto mayor a 0");
    } else {
        
      this.saldo = this.saldo + monto
      this.historial.push(`deposito: $${monto}`);
    };
  };

  retirar(monto: number) {
    if ( monto > this.saldo ) {
        throw new Error(" El monto supera su saldo disponible ")
    } else if ( monto <= 0 ) {
        throw new Error(" El monto debe ser mayor a 0 ")
    } else {
        this.saldo = this.saldo - monto 
        this.historial.push(`Retiro exitoso: $${monto}`)
    }
  };

  consultarSaldo(): number {
    return this.saldo;
  };

  obtenerHistorial(): string[] {
    return [...this.historial]
  };
}

  const cuenta = new CuentaBancaria("Lautaro");


    cuenta.depositar(10);
    cuenta.retirar(5);
    console.log("Saldo actual: ", cuenta.consultarSaldo());
    console.log("Historial", cuenta.obtenerHistorial());