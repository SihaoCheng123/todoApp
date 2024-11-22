import { Component } from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantallaConBoton(true);
  }
}
