import { Injectable } from '@angular/core';
import { Jornada } from '../modelos/jornada';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JornadaService {
  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getJornadas(){
    return this.http.get(this._url);
  }

  getJornada(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggJornada(jornada:any){
    return this.http.post(this._url,jornada);
  }
  updateJornada(jornada:any){
    return this.http.put(this._url,+'/'+jornada.id, jornada);
  }
  deleteJornada(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
