import { Component } from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";
import {Semana} from "../services/interfaces/fecha";
import {cadaRutina} from "../services/interfaces/cada-tarea";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  iconoFlecha:string = "bi bi-chevron-right"
  diasSemana: Semana[] = [
    {diaSemana:"MON"},
    {diaSemana:"TUE"},
    {diaSemana:"WED"},
    {diaSemana:"THU"},
    {diaSemana:"FRI"},
    {diaSemana:"SAT"},
    {diaSemana:"SUN"},
  ]

  rutinas:cadaRutina[]= [
    {iconoRutina:"bi bi-calendar",nombreRutina:"Daily",descripcionRutina:"Daily routines", iconoFlecha:this.iconoFlecha},
    {iconoRutina:"bi bi-pc-display",nombreRutina:"Work",descripcionRutina:"Work routines", iconoFlecha:this.iconoFlecha},
    {iconoRutina:"bi bi-activity",nombreRutina:"Gym",descripcionRutina:"Gym routines", iconoFlecha:this.iconoFlecha},
    {iconoRutina:"bi bi-discord",nombreRutina:"Social",descripcionRutina:"Social life", iconoFlecha:this.iconoFlecha},
  ]
  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantallaConBoton(true);
  }
}
