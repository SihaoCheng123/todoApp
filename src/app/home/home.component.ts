import {Component, OnInit} from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";
import {CadaTarea} from "../services/interfaces/cada-tarea";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
  private tieneBotonService: TieneBotonService,
      ){}

ngOnInit() {
    this.tieneBotonService.pantallaConBoton(true);
}

    totalTareas: CadaTarea[] = [
        {icono:"bi bi-check-square", nombreTarea: "Wake up", tiempo: "7 a.m", puntosAjuste:"bi bi-three-dots-vertical"},
        {icono:"bi bi-check-square", nombreTarea: "Have breakfast", tiempo: "8 a.m", puntosAjuste:"bi bi-three-dots-vertical"},
        {icono:"bi bi-check-square", nombreTarea: "Exam", tiempo: "10 a.m", puntosAjuste:"bi bi-three-dots-vertical"},
        {icono:"bi bi-check-square", nombreTarea: "Family lunch", tiempo: "2 p.m", puntosAjuste:"bi bi-three-dots-vertical"},
        {icono:"bi bi-square", nombreTarea: "Time to work", tiempo: "4 p.m", puntosAjuste:"bi bi-three-dots-vertical"},
        {icono:"bi bi-square", nombreTarea: "Proyect", tiempo: "8 p.m", puntosAjuste:"bi bi-three-dots-vertical"},
    ];
}
