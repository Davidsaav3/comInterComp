import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, Hijo1Component, Hijo2Component],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  mensajeParaHijos: string = ''; // MENSAJE QUE EL PADRE ENVÍA A LOS HIJOS
  mensajeDeHijo1: string = ''; // MENSAJE RECIBIDO DEL HIJO 1
  mensajeDeHijo2: string = ''; // MENSAJE RECIBIDO DEL HIJO 2

  enviarMensaje() {
    this.mensajeParaHijos = 'Hola desde el Padre'; // ASIGNA MENSAJE PARA LOS HIJOS
  }

  recibirMensajeHijo1(mensaje: string) {
    this.mensajeDeHijo1 = mensaje; // RECIBE MENSAJE DESDE EL HIJO 1
  }

  recibirMensajeHijo2(mensaje: string) {
    this.mensajeDeHijo2 = mensaje; // RECIBE MENSAJE DESDE EL HIJO 2
  }
}
