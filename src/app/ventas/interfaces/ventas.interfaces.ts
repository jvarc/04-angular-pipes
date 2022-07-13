
export enum Banco {
  BBVA, Openbank, ING, Caixa
}

export interface Clientes {
  codigo: number;
  nombre: string;
  apellido: string;
  banco: Banco;
}
