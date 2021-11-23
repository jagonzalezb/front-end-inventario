import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from '../modelos/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private _url:string= environment.url;
  constructor(private http:HttpClient) { }

  // EmpresaLista:Array<Empresa>=(
  //   {
  //     id:this.getEmpresas()
  //   }
  // )
  getEmpresas(){
    return this.http.get(this._url);
  }

  getEmpresa(id:number){
    return this.http.get(this._url+'/'+id);
  }

  aggEmpresa(empresa:any){
    return this.http.post(this._url,empresa);
  }
  updateEmpresa(empresa:any){
    return this.http.put(this._url,+'/'+empresa.id, empresa);
  }
  deleteEmpresa(id:number){
    return this.http.delete(this._url+'/'+id);
  }
}