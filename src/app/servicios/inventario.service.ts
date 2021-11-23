import { Injectable } from '@angular/core';
import { Inventario } from '../modelos/inventario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getInventarios(){
    return this.http.get(this._url);
  }

  getInventario(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggInventario(inventario:any){
    return this.http.post(this._url,inventario);
  }
  updateInventario(inventario:any){
    return this.http.put(this._url,+'/'+inventario.id, inventario);
  }
  deleteInventario(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
