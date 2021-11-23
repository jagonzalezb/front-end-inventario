import { Injectable } from '@angular/core';
import { Sede } from '../modelos/sede';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getSedes(){
    return this.http.get(this._url);
  }

  getSede(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggSede(sede:any){
    return this.http.post(this._url,sede);
  }
  updateSede(sede:any){
    return this.http.put(this._url,+'/'+sede.id, sede);
  }
  deleteSede(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
