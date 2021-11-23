import { Injectable } from '@angular/core';
import { TipoElemento } from '../modelos/tipo-elemento';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoElementoService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }
  
  getTipoElementos(){
    return this.http.get(this._url);
  }

  getTipoElemento(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggTipoElemento(tipoelemento:any){
    return this.http.post(this._url,tipoelemento);
  }
  updateTipoElemento(tipoelemento:any){
    return this.http.put(this._url,+'/'+tipoelemento.id,tipoelemento);
  }
  deleteTipoElemento(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}