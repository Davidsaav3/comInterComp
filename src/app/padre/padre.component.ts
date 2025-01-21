import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';
import { Hijo1Component } from '../hijo1/hijo1.component';  // Importa el componente hijo1
import { Hijo2Component } from '../hijo2/hijo2.component';  // Importa el componente hijo2

@Component({
  selector: 'app-padre',
  standalone: true,  // Marca el componente como standalone
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  imports: [CommonModule,Hijo1Component, Hijo2Component]  // Asegura que CommonModule esté importado
})
export class PadreComponent implements OnInit {
  soy = 'padre';
  componentes = ['hijo1', 'hijo2', 'padre'];
  ultimoMensaje = '';

  constructor(private controlEventosService: ControlEventosService) { }

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res => {
        const obj = JSON.parse(res);
        if (obj.destinatario === this.soy) {
          console.log('Soy ' + this.soy + ' y he recibido: ' + obj.mensaje);
          this.ultimoMensaje = obj.mensaje;
        }
      }
    );
  }

  emitir(mensaje: string, destinatario: string) {
    this.controlEventosService.emitir(mensaje, destinatario);
  }
}
