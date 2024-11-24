import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrl: './add-btn.component.scss'
})
export class AddBtnComponent {

  constructor(
      private router: Router
  ) { }
  cambiarHome() {
    this.router.navigate(['home']);
  }
}
