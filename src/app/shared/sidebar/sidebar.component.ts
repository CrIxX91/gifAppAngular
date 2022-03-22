import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  get historial(){
    return this.gifservice.historial;
  }

  buscar(query:string){
    this.gifservice.buscarGifs(query);
  }

  constructor(private gifservice: GifsService) { }
}
