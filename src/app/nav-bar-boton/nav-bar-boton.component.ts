import {Component, OnInit} from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";

@Component({
  selector: 'app-nav-bar-boton',
  templateUrl: './nav-bar-boton.component.html',
  styleUrl: './nav-bar-boton.component.scss'
})
export class NavBarBotonComponent implements OnInit {
  siBoton:boolean = true;

  constructor(
      private tieneBotonService: TieneBotonService,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantalla$.subscribe(valor =>{
      this.siBoton = valor;
    })
  }
}
