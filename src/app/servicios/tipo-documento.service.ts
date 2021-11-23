import { Injectable } from '@angular/core';
import { TipoDocumento } from '../modelos/tipo-documento';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private _url:string= environment.url;
  constructor(private http:HttpClient) { }
  
  getTipoDocumentos(){
    return this.http.get(this._url);
  }

  getTipoDocumento(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggTipoDocumento(tipodocumento:any){
    return this.http.post(this._url,tipodocumento);
  }
  updateTipoDocumento(tipodocumento:any){
    return this.http.put(this._url,+'/'+tipodocumento.id, tipodocumento);
  }
  deleteTipoDocumento(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}
