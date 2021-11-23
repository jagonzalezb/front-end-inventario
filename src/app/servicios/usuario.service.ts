import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }
  
  getUsuarios(){
    return this.http.get(this._url);
  }

  getUsuario(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggUsuario(usuario:any){
    return this.http.post(this._url,usuario);
  }
  updateUsuario(usuario:any){
    return this.http.put(this._url,+'/'+usuario.id,usuario);
  }
  deleteUsuario(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}