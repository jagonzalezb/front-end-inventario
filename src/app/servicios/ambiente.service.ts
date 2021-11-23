import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ambiente } from '../modelos/ambiente';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getAmbientes(){
    return this.http.get(this._url);
  }

  getAmbiente(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggAmbiente(ambiente:any){
    return this.http.post(this._url,ambiente);
  }
  updateAmbiente(ambiente:any){
    return this.http.put(this._url,+'/'+ambiente.id, ambiente);
  }
  deleteAmbiente(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}