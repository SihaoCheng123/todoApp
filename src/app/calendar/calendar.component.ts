import { Component } from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";
import {Evento, Fecha} from "../services/interfaces/fecha";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  eventos: Evento[] = [
    {nombreEvento:"Birthday",fechaEvento:"23rd November", descripcionEvento: "My birthday", iconoEvento:"bi bi-cake"},
    {nombreEvento:"Exam",fechaEvento:"25th November", descripcionEvento: "Interfaces", iconoEvento:"bi bi-card-text"},
    {nombreEvento:"Proyect",fechaEvento:"29th November", descripcionEvento: "Group proyect deadline", iconoEvento:"bi bi-people-fill"}
  ];

  meses: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  diasMes: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  diasTotales : (number|null)[] = [];
  diaActual:Date = new Date();
  mesActual: number = this.diaActual.getMonth();
  diasSemana:string[]= ["SUN","MON","TUE","WED","THU","FRI","SAT",]

  calendar:Fecha =
    {mes:this.meses[this.mesActual],
      diasSemana:this.diasSemana,
      dias: this.crearDias(this.diasMes[this.mesActual])
    }


  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantallaConBoton(true);
  }

  crearDias(numDias:number):(number | null)[]{
    let diaSemana:number = this.diaActual.getDay();
    let primerDia:Date = new Date(this.diaActual.getFullYear(), this.diaActual.getMonth(), 1)
    let primerDiaSemana = primerDia.getDay();
    for (let i = 1; i < primerDiaSemana+1; i++) {
      this.diasTotales[i] = null;
    }
    for (let i = primerDiaSemana+1; i < numDias+primerDiaSemana+1; i++) {
      this.diasTotales[i-1] = i-primerDiaSemana;
    }
    return this.diasTotales;
  }

}
