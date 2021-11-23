import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './vista/vista.component';
import { AccionComponent } from './vista/seguridad/accion/accion.component';
import { PersonaComponent } from './vista/seguridad/persona/persona.component';
import { InicioSesionComponent } from './formulario/inicio-sesion/inicio-sesion.component';
import { AprendizComponent } from './aprendiz/aprendiz.component';
import { InventarioComponent } from './aprendiz/inventario/inventario/inventario.component';
import { HistorialComponent } from './aprendiz/inventario/historial/historial.component';
import { RegistroComponent } from './formulario/registro/registro.component';
import { ClaveOlvidadaComponent } from './formulario/clave-olvidada/clave-olvidada.component';
import { EditarPComponent } from './vista/seguridad/persona/editar-p/editar-p.component';
import { RolComponent } from './vista/seguridad/rol/rol.component';
import { UsuarioComponent } from './vista/seguridad/usuario/usuario.component';
import { EditarAComponent } from './vista/seguridad/accion/editar-a/editar-a.component';
import { AgregarAComponent } from './vista/seguridad/accion/agregar-a/agregar-a.component';
import { AgregarPComponent } from './vista/seguridad/persona/agregar-p/agregar-p.component';
import { EditarRComponent } from './vista/seguridad/rol/editar-r/editar-r.component';
import { AgregarRComponent } from './vista/seguridad/rol/agregar-r/agregar-r.component';
import { EditarUComponent } from './vista/seguridad/usuario/editar-u/editar-u.component';
import { AgregarUComponent } from './vista/seguridad/usuario/agregar-u/agregar-u.component';
import { ParametrosComponent } from './vista/parametros/parametros.component';
import { EmpresaComponent } from './vista/parametros/empresa/empresa.component';
import { EditarEmComponent } from './vista/parametros/empresa/editar-em/editar-em.component';
import { AgregarEmComponent } from './vista/parametros/empresa/agregar-em/agregar-em.component';
import { JornadaComponent } from './vista/parametros/jornada/jornada.component';
import { EditarJornadaComponent } from './vista/parametros/jornada/editar-jornada/editar-jornada.component';
import { AgregarJornadaComponent } from './vista/parametros/jornada/agregar-jornada/agregar-jornada.component';
import { SedeComponent } from './vista/parametros/sede/sede.component';
import { EditarSedComponent } from './vista/parametros/sede/editar-sed/editar-sed.component';
import { AgregaSedComponent } from './vista/parametros/sede/agrega-sed/agrega-sed.component';
import { InventarioaComponent } from './vista/inventarioa/inventarioa.component';
import { InventariosComponent } from './vista/inventarioa/inventarios/inventarios.component';
import { AmbienteComponent } from './vista/inventarioa/ambiente/ambiente.component';
import { EditarAmbienteComponent } from './vista/inventarioa/ambiente/editar-ambiente/editar-ambiente.component';
import { AgregarAmbienteComponent } from './vista/inventarioa/ambiente/agregar-ambiente/agregar-ambiente.component';
import { ElementoComponent } from './vista/inventarioa/elemento/elemento.component';
import { EditarElementoComponent } from './vista/inventarioa/elemento/editar-elemento/editar-elemento.component';
import { AgregarElementoComponent } from './vista/inventarioa/elemento/agregar-elemento/agregar-elemento.component';
import { EstadoComponent } from './vista/inventarioa/estado/estado.component';
import { EditarEstadoComponent } from './vista/inventarioa/estado/editar-estado/editar-estado.component';
import { AgregarEstadoComponent } from './vista/inventarioa/estado/agregar-estado/agregar-estado.component';
import { ZonaComponent } from './vista/inventarioa/zona/zona.component';
import { EditarZonaComponent } from './vista/inventarioa/zona/editar-zona/editar-zona.component';
import { AgregarZonaComponent } from './vista/inventarioa/zona/agregar-zona/agregar-zona.component';
import { HistorialinvComponent } from './vista/inventarioapre/historialinv/historialinv.component';
import { RegistroinvapreComponent } from './vista/inventarioapre/historialinv/registroinvapre/registroinvapre.component';
import { PerfilComponent } from './vista/perfil/perfil.component';
import { AboutComponent } from './vista/about/about.component';
import { UsuarioapreComponent } from './aprendiz/usuarioapre/usuarioapre.component';
import { AprendiceComponent } from './vista/about/aprendice/aprendice.component';
import { InstructoresComponent } from './vista/about/instructores/instructores.component';
import { EditarInventariosComponent } from './vista/inventarioa/inventarios/editar-inventarios/editar-inventarios.component';


const routes: Routes = [
  {
    path: 'administrador/seguridad/persona',
    component: PersonaComponent,
  },
  {
    path: 'administrador/seguridad/persona/editar-p',
    component: EditarPComponent,
  },
  {
    path: 'administrador/seguridad/usuario',
    component: UsuarioComponent
  },
  {
    path: 'administrador/seguridad/usuario/editar-u',
    component: EditarUComponent
  },
  {
    path:'administrador/seguridad/accion',
    component: AccionComponent
  },
  {
    path:'administrador/seguridad/accion/editar-a',
    component: EditarAComponent
  },
  {
    path:'administrador/seguridad/rol',
    component: RolComponent
  },
  {
    path:'administrador/seguridad/rol/editar-r',
    component: EditarRComponent
  },
  {
    path:'administrador/parametros/empresa',
    component: EmpresaComponent
  },
  {
    path:'administrador/parametros/empresa/editar-em',
    component: EditarEmComponent
  },
  {
    path:'administrador/parametros/sede',
    component: SedeComponent
  },
  {
    path:'administrador/parametros/sede/editar-sed',
    component: EditarSedComponent
  },
  {
    path:'administrador/parametros/jornada',
    component: JornadaComponent
  },
  {
    path:'administrador/parametros/jornada/editar-jornada',
    component: EditarJornadaComponent
  },
  {
    path:'administrador/inventarioa/inventarios',
    component: InventariosComponent
  },
  {
    path:'administrador/parametros/inventarios/editar-inventarios',
    component: EditarInventariosComponent
  },
  //{
    //path:'administrador/inventarioa/inventarios/editar-elemento',
    //component: EditarElementoComponent
  //},
  {
    path:'administrador/inventarioa/elemento',
    component: ElementoComponent
  },
  {
    path:'administrador/inventarioa/elemento/editar-elemento',
    component: EditarElementoComponent
  },
  {
    path:'administrador/inventarioa/zona',
    component: ZonaComponent
  },
  {
    path:'administrador/inventarioa/zona/editar-zona',
    component: EditarZonaComponent
  },
  {
    path:'administrador/inventarioa/ambiente',
    component: AmbienteComponent
  },
  {
    path:'administrador/inventarioa/ambiente/editar-ambiente',
    component: EditarAmbienteComponent
  },
  {
    path:'administrador/inventarioa/estado',
    component: EstadoComponent
  },
  {
    path:'administrador/inventarioa/estado/editar-estado',
    component: EditarEstadoComponent
  },
  {
    path:'administrador/inventarioapre/historialinv',
    component: HistorialinvComponent
  },
  {
    path:'administrador/inventarioapre/historialinv/registroinvapre',
    component: RegistroinvapreComponent
  },
  {
    path:'administrador',
    component: VistaComponent
  },
  {
    path:'administrador/inventarioapre/historialinv',
    component: HistorialinvComponent
  },
  {
    path:'administrador/inventarioapre/historialinv/registroinvapre',
    component: RegistroinvapreComponent
  },
  {
    path:'administrador/perfil',
    component: PerfilComponent
  },
  {
    path:'administrador/about',
    component: AboutComponent
  },
  {
    path:'administrador/about/aprendice',
    component: AprendiceComponent
  },
  {
    path:'administrador/about/instructores',
    component: InstructoresComponent
  },
  /*{
    path: 'formulario/iniciosesion',
    redirectTo: '/vista',
    pathMatch: 'full'
  }   validar si ya se ha iniciado sesión y redireccionar por si la sesión está iniciada */
  
  //cualquier otra ruta que no exista redirecciona a la ruta inicio
  {
    path: '',
    component: InicioSesionComponent
  },

  //si hay una sesión iniciada redirecciona a la vista
  {
    path: 'administrador',
    redirectTo: '/administrador',
    pathMatch: 'full'
  },
  //si no hay una sesión iniciada redirecciona a la página de inicio de sesión
  {
    path: 'aprendiz/inicio',
    component: AprendizComponent
  },
  {
    path: 'aprendiz/inventario/inventario',
    component: InventarioComponent
  },
  {
    path: 'aprendiz/inventario/historial',
    component: HistorialComponent 
  },
  {
    path: 'formulario/inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'formulario/registro',
    component: RegistroComponent
  },
  {
    path: 'formulario/clave-olvidada',
    component: ClaveOlvidadaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
