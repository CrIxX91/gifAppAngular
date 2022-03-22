import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GisfPageComponent } from './gisf-page/gisf-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GisfPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    GisfPageComponent
  ]
})
export class GifsModule { }
