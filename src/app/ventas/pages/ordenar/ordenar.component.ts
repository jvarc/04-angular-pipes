import { Component} from '@angular/core';
import { Clientes, Banco } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  cambio: boolean = false;
  orden: boolean = false;
  ordenarPor: string = '';
  clientesOrdenados: Clientes[] = [];
  clientes: Clientes[] = [
    {
      codigo: 1,
      nombre: 'Juan',
      apellido: 'Vargas',
      banco: Banco.BBVA
    },
    {
      codigo: 2,
      nombre: 'Stephani',
      apellido: 'Cuicas',
      banco: Banco.Openbank
    },
    {
      codigo: 3,
      nombre: 'Fatima',
      apellido: 'Radwan',
      banco: Banco.Caixa
    },
    {
      codigo: 4,
      nombre: 'Laura',
      apellido: 'Vargas',
      banco: Banco.ING
    },
  ];


  enMayuscula(){

    return (this.cambio)
        ? this.cambio = false
        : this.cambio = true;
  };

  porNombre(){

    (this.orden)
      ? this.orden = false
      : this.orden = true;

    this.ordenarPor = 'nombre'
  };

  porApellido(){

    (this.orden)
    ? this.orden = false
    : this.orden = true;

    this.ordenarPor = 'apellido'
  };

  porCodigo(){
    (this.orden)
    ? this.orden = false
    : this.orden = true;

    this.ordenarPor = 'codigo'
  }


}
