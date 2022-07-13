import { Component} from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent {

  nombreLower: string = 'juan carlos';
  nombreUpper: string = 'JUAN CARLOS';
  nombreCompleto: string = 'JuaN cArlos VarGAS ChAVEz';

  fecha: Date = new Date();

}
