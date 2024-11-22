import { Component } from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantallaConBoton(true);
  }
}
