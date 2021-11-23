import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { VistaComponent } from './vista/vista.component';
import { AccionComponent } from './vista/seguridad/accion/accion.component';
import { PersonaComponent } from './vista/seguridad/persona/persona.component';

import { FormularioComponent } from './formulario/formulario.component';
import { InicioSesionComponent } from './formulario/inicio-sesion/inicio-sesion.component';
import { AprendizComponent } from './aprendiz/aprendiz.component';
import { InventarioComponent } from './aprendiz/inventario/inventario/inventario.component';
import { HistorialComponent } from './aprendiz/inventario/historial/historial.component';
import { AprendizLinksComponent } from './sidebar/aprendiz-links/aprendiz-links.component';
import { AdministradorLinksComponent } from './sidebar/administrador-links/administrador-links.component';
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
import { InventarioapreComponent } from './vista/inventarioapre/inventarioapre.component';
import { HistorialinvComponent } from './vista/inventarioapre/historialinv/historialinv.component';
import { RegistroinvapreComponent } from './vista/inventarioapre/historialinv/registroinvapre/registroinvapre.component';
import { AdministradornLinksComponent } from './navbar/administradorn-links/administradorn-links.component';
import { AprendiznLinksComponent } from './navbar/aprendizn-links/aprendizn-links.component';
import { PerfilComponent } from './vista/perfil/perfil.component';
import { AboutComponent } from './vista/about/about.component';
import { InstructoresComponent } from './vista/about/instructores/instructores.component';
import { AprendiceComponent } from './vista/about/aprendice/aprendice.component';
import { UsuarioapreComponent } from './aprendiz/usuarioapre/usuarioapre.component';
import { EditarInventariosComponent } from './vista/inventarioa/inventarios/editar-inventarios/editar-inventarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    VistaComponent,
    AccionComponent,
    PersonaComponent,
    FormularioComponent,
    InicioSesionComponent,
    AprendizComponent,
    InventarioComponent,
    HistorialComponent,
    AprendizLinksComponent,
    AdministradorLinksComponent,
    RegistroComponent,
    ClaveOlvidadaComponent,
    UsuarioComponent,
    RolComponent,
    ParametrosComponent,
    EditarPComponent,
    AgregarPComponent,
    EditarUComponent,
    AgregarUComponent,
    EditarAComponent,
    AgregarAComponent,
    EditarRComponent,
    AgregarRComponent,
    EditarEmComponent,
    AgregarEmComponent,
    EditarSedComponent,
    AgregaSedComponent,
    EditarJornadaComponent,
    AgregarJornadaComponent,
    InventarioaComponent,
    EmpresaComponent,
    JornadaComponent,
    SedeComponent,
    InventariosComponent,
    AmbienteComponent,
    EditarElementoComponent,
    EditarAmbienteComponent,
    AgregarAmbienteComponent,
    ElementoComponent,
    AgregarElementoComponent,
    EstadoComponent,
    EditarEstadoComponent,
    AgregarEstadoComponent,
    ZonaComponent,
    EditarZonaComponent,
    AgregarZonaComponent,
    InventarioapreComponent,
    HistorialinvComponent,
    RegistroinvapreComponent,
    AdministradornLinksComponent,
    AprendiznLinksComponent,
    PerfilComponent,
    AboutComponent,
    InstructoresComponent,
    AprendiceComponent,
    UsuarioapreComponent,
    EditarInventariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
