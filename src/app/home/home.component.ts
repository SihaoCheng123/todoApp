import {Component, OnInit} from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";

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
}
