import {Component, OnInit} from '@angular/core';
import {TieneBotonService} from "../services/comunicacion/tiene-boton.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-boton',
  templateUrl: './nav-bar-boton.component.html',
  styleUrl: './nav-bar-boton.component.scss'
})
export class NavBarBotonComponent implements OnInit {
  siBoton:boolean = true;

  constructor(
      private tieneBotonService: TieneBotonService,
      private router: Router,
  ){}

  ngOnInit() {
    this.tieneBotonService.pantalla$.subscribe(valor =>{
      this.siBoton = valor;
    })
  }

  cambiarHome() {
    this.router.navigate(['home']);
  }

  cambiarCalendar() {
    this.router.navigate(['calendar']);
  }

  cambiarSchedule() {
    this.router.navigate(['schedule']);
  }
  cambiarUser() {
    this.router.navigate(['user']);
  }

  cambiarAddBtn() {
    this.router.navigate(['add']);
  }
}
