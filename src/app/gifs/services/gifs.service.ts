import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGiftResponse, Gif } from '../interfaces/gift.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'qLN1QrFMEle7QVfs0J0K44bUkr5J8xjM';
  private servicioUrl:string ='https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[]=[];

  get historial() {

    return [... this._historial];
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =JSON.parse(localStorage.getItem('resultado')!) || [];

    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  buscarGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','30')
    .set('q',query);

    this.http.get<SearchGiftResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe((resp) => {
      // console.log(resp.data);
      this.resultados =resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
     });

  }
}
