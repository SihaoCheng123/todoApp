import { Component } from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantallaConBoton(false);
  }
}
