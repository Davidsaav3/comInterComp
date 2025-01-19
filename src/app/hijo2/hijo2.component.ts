import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css'],
})
export class Hijo2Component {
  @Input() mensajeDelPadre: string = ''; // MENSAJE RECIBIDO DEL PADRE
  @Output() mensajeAlPadre = new EventEmitter<string>(); // EMITE MENSAJE AL PADRE

  enviarMensaje() {
    this.mensajeAlPadre.emit('Hola desde Hijo 2'); // ENVÍA MENSAJE AL PADRE
  }
}
