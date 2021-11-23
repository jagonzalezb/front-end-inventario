import {
  Component
} from '@angular/core';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario';
  constructor(public router: Router) {
  }
  ngOnInit() {
    
  }
  isf(){
    var link = this.router.url.includes('administrador') || this.router.url.includes('aprendiz');
    return link;
  }
  ifForgotPassword(){
    return this.router.url.includes('clave-olvidada');
  }
}

