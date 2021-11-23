import { Injectable } from '@angular/core';
import { Estado } from '../modelos/estado';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getEstados(){
    return this.http.get(this._url);
  }

  getEstado(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggEstado(estado:any){
    return this.http.post(this._url,estado);
  }
  updateEstado(estado:any){
    return this.http.put(this._url,+'/'+estado.id, estado);
  }
  deleteEstado(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}