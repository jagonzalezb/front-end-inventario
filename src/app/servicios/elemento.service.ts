import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Elemento } from '../modelos/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getElementos(){
    return this.http.get(this._url);
  }

  getElemento(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggElemento(elemento:any){
    return this.http.post(this._url,elemento);
  }
  updateElemento(elemento:any){
    return this.http.put(this._url,+'/'+elemento.id, elemento);
  }
  deleteElemento(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}