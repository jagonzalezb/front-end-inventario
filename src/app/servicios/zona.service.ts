import { Injectable } from '@angular/core';
import { Zona } from '../modelos/zona';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {


  private _url:string= environment.url;
  constructor(private http:HttpClient) { }
  
  getZonas(){
    return this.http.get(this._url);
  }

  getZona(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggZona(zona:any){
    return this.http.post(this._url,zona);
  }
  updateZona(zona:any){
    return this.http.put(this._url,+'/'+zona.id,zona);
  }
  deleteZona(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
