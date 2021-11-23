import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aprendices=[
    {
      nombre:'Jhon Corredor',
      correo:'jhoncorredor@misena.edu.co',
      img:'/assets/img/fotos',
      equipo:'Servicios Tecnologicos'
    },
    {
      nombre:'Jesús Ariel González Bonilla',
      correo:'ariel5253@misena.edu.co',
      img:'/assets/img/fotos/instructorJesus.jpg',
      equipo:'Lider Del Semillero'
    }
  ]

}
