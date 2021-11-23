import { Injectable } from '@angular/core';
import { Accion } from '../modelos/accion';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AccionService {
  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  accionList: Array<Accion> = ([  
    { id: 1, codigo: 565415, nombre: this.getAccion(), activo: true },
  ])  

  getAcciones(){
    return this.http.get(this._url);
  }

  getAccion(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggAccion(accion:any){
    return this.http.post(this._url,accion);
  }
  updateAccion(accion:any){
    return this.http.put(this._url,+'/'+accion.id, accion);
  }
  deleteAccion(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}

