import { Pipe, PipeTransform } from '@angular/core';
import { Clientes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(clientes: Clientes[], ordenarPor: string = 'sin valor', orden: boolean = true ): Clientes[] {

    switch(ordenarPor){

      case 'nombre':
        if(orden){
          return clientes.sort( (a,b) => ( a.nombre > b.nombre)? 1: -1);
        }else{
          return clientes.sort( (a,b) => ( a.nombre < b.nombre)? 1: -1);
        };

      case 'apellido':
        if(orden){
          return clientes.sort( (a,b) => ( a.apellido > b.apellido)? 1: -1);
        }else{
          return clientes.sort( (a,b) => ( a.apellido < b.apellido)? 1: -1);
        };

      case 'codigo':
        if(orden){
          return clientes.sort((a,b) => a.codigo - b.codigo);
        }else{
          return clientes.sort((a,b) => b.codigo - a.codigo);
        };




      default:
        return clientes;
    }
  }

}
