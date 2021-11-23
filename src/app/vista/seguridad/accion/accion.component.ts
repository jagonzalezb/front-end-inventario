import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.css']
})
export class AccionComponent implements OnInit {

  constructor() { }

  /* PRUEBA */
  accion=[
    {
      codigo: '1',
      nombre: "camilin",
    },
    {
      codigo: '2',
      nombre: "ardillin",
    },
    {
      codigo: '3',
      nombre: "vocerín",
    },
    {
      codigo: '4',
      nombre: "camilin",
    },
    {
      codigo: '5',
      nombre: "ardillin",
    },
    {
      codigo: '6',
      nombre: "vocerín",
    },
    //make two new objects
    {
      codigo: '7',
      nombre: "camilin",
    },
    {
      codigo: '8',
      nombre: "ardillin",
    },
    {
      codigo: '9',
      nombre: "vocerín",
    },
  ]

  ngOnInit(): void {
  }

}
