import { Injectable } from '@angular/core';
import { InventarioUsuario } from '../modelos/inventario-usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioUsuarioService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getInventarioUsuarios(){
    return this.http.get(this._url);
  }

  getInventarioUsuario(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggInventarioUsuario(inventariousuario:any){
    return this.http.post(this._url,inventariousuario);
  }
  updateInventarioUsuario(inventariousuario:any){
    return this.http.put(this._url,+'/'+inventariousuario.id, inventariousuario);
  }
  deleteInventarioUsuario(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}