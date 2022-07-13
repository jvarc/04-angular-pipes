import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
