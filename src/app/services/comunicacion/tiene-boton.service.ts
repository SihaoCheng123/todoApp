import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TieneBotonService {

  pantallaActual: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pantalla$: Observable<boolean> = this.pantallaActual.asObservable();
  constructor(
  ) { }

  pantallaConBoton(conBoton: boolean){
    this.pantallaActual.next(conBoton);
  }

}
