import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ComunesComponent } from './pages/comunes/comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';





@NgModule({
  declarations: [
    //modulos
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent,

    //pipes
    MayusculasPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
