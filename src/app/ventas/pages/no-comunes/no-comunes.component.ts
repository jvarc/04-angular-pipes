import { Component, } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Juan Carlos';
  genero: string = 'masculino';
  i: number = 0;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  cliente: string[] = ['Maria', 'Richard', 'Pedro', 'Ana', 'Jose'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarNombre(){
    this.nombre = 'Maria';
    this.genero = 'femenino'
      
  };

  borrarNombre(){
      this.cliente.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Juan Carlos',
    edad: 35,
    direccion: 'CLL Artami'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    
    setTimeout(() =>{
      resolve ('Tenemos data de promesa');
    }, 3500);
  });

}
