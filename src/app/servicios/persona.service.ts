import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  getPersonas(){
    return this.http.get(this._url);
  }

  getPersona(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggPersona(persona:any){
    return this.http.post(this._url,persona);
  }
  updatePersona(persona:any){
    return this.http.put(this._url,+'/'+persona.id, persona);
  }
  deletePersona(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
