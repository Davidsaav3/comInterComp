import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css'],
  imports: [CommonModule]  // Asegura que CommonModule esté importado
})
export class Hijo1Component implements OnInit, OnDestroy {

  soy = 'hijo1';
  componentes = ['hijo1', 'hijo2', 'padre'];
  ultimoMensaje = '';
  private subscription: Subscription | null = null;  // Inicializamos en null

  constructor(private controlEventosService: ControlEventosService) { }

  ngOnInit(): void {
    this.subscription = this.controlEventosService.eventEmitterFunction.subscribe(
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
