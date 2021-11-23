import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public href: string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }
  seguridad:any="";
  inventarioAprendiz:any="";
//cada vez que se cambie de ruta se ejecuta el ngDoCheck
  cambiarLink(link:any){
    link.style.backgroundColor='#fff';
    link.style.color='#000';
  }
  // ngDoCheck(): void {
  //   this.href = window.location.href;
  //   this.href.split('/');
  //   if(this.href.split('/')[4]=="seguridad"){
  //     this.seguridad=document.getElementById('seguridad');
  //     this.seguridad.style.backgroundColor='#fa4e0d';
  //     this.seguridad.style.color='#fff';
  //     this.cambiarLink(this.inventarioAprendiz);
  //     // this.inventarioAprendiz.style.backgroundColor='#fff';
  //     // this.inventarioAprendiz.style.color='#000';
  //   }else if(this.href.split('/')[4]=="inventario-aprendiz"){
  //     this.inventarioAprendiz=document.getElementById('inventarioAprendiz');
  //     this.inventarioAprendiz.style.backgroundColor='#fa4e0d';
  //     this.inventarioAprendiz.style.color='#fff';
  //     this.cambiarLink(this.seguridad);
  //     // this.seguridad.style.backgroundColor='#fff';
  //     // this.seguridad.style.color='#000';
  //   }
    
  //}

  isAdminRoute(){
    return this.router.url.includes('administrador');
  }
  isAprendizRoute(){
    return this.router.url.includes('aprendiz');
  }
}
