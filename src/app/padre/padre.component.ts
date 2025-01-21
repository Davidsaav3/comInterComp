import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';
import { Hijo1Component } from '../hijo1/hijo1.component';  // IMPORTA EL COMPONENTE HIJO1
import { Hijo2Component } from '../hijo2/hijo2.component';  // IMPORTA EL COMPONENTE HIJO2

@Component({
  selector: 'app-padre',
  standalone: true,  // MARCA EL COMPONENTE COMO STANDALONE
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  imports: [CommonModule, Hijo1Component, Hijo2Component]  // ASEGURA QUE CommonModule, Hijo1Component Y Hijo2Component ESTÉN IMPORTADOS
})
export class PadreComponent implements OnInit {
  soy = 'padre';  // IDENTIFICA EL COMPONENTE ACTUAL
  componentes = ['hijo1', 'hijo2', 'padre'];  // LISTA DE COMPONENTES PARA COMUNICACIÓN
  ultimoMensaje = '';  // ALMACENA EL ÚLTIMO MENSAJE RECIBIDO

  constructor(private controlEventosService: ControlEventosService) { }  // INYECCIÓN DE DEPENDENCIA

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res => {
        const obj = JSON.parse(res);  // PARSEA EL MENSAJE EN FORMATO JSON
        if (obj.destinatario === this.soy) {  // VERIFICA SI EL MENSAJE ES PARA ESTE COMPONENTE
          console.log('Soy ' + this.soy + ' y he recibido: ' + obj.mensaje);  // MUESTRA EL MENSAJE EN CONSOLA
          this.ultimoMensaje = obj.mensaje;  // ACTUALIZA EL MENSAJE RECIBIDO
        }
      }
    );
  }

  emitir(mensaje: string, destinatario: string) {
    this.controlEventosService.emitir(mensaje, destinatario);  // EMITE UN MENSAJE A OTRO COMPONENTE
  }
}
