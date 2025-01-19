import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css'],
})
export class Hijo1Component {
  @Input() mensajeDelPadre: string = ''; // MENSAJE RECIBIDO DEL PADRE
  @Output() mensajeAlPadre = new EventEmitter<string>(); // EMITE MENSAJE AL PADRE

  enviarMensaje() {
    this.mensajeAlPadre.emit('Hola desde Hijo 1'); // ENVÍA MENSAJE AL PADRE
  }
}
