import { Injectable } from '@angular/core';
import { Rol } from '../modelos/rol';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RolService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getRoles(){
    return this.http.get(this._url);
  }

  getRol(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggRol(rol:any){
    return this.http.post(this._url,rol);
  }
  updateRol(rol:any){
    return this.http.put(this._url,+'/'+rol.id, rol);
  }
  deleteRol(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
