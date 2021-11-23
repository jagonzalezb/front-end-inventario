import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioRol } from '../modelos/usuario-rol';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }
  
  getUsuarioRoles(){
    return this.http.get(this._url);
  }

  getUsuarioRol(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggUsuarioRol(usuariorol:any){
    return this.http.post(this._url,usuariorol);
  }
  updateUsuarioRol(usuariorol:any){
    return this.http.put(this._url,+'/'+usuariorol.id,usuariorol);
  }
  deleteUsuarioRol(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}