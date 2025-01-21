import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css'],
  imports: [CommonModule]  // ASEGURA QUE CommonModule ESTÉ IMPORTADO
})
export class Hijo2Component implements OnInit, OnDestroy {

  soy = 'hijo2';  // IDENTIFICA EL COMPONENTE ACTUAL
  componentes = ['hijo1', 'hijo2', 'padre'];  // LISTA DE COMPONENTES PARA COMUNICACIÓN
  ultimoMensaje = '';  // ALMACENA EL ÚLTIMO MENSAJE RECIBIDO
  private subscription: Subscription | null = null;  // INICIALIZAMOS EN NULL PARA LA SUSCRIPCIÓN

  constructor(private controlEventosService: ControlEventosService) { }  // INYECCIÓN DE DEPENDENCIA

  ngOnInit(): void {
    this.subscription = this.controlEventosService.eventEmitterFunction.subscribe(
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

  ngOnDestroy(): void {
    if (this.subscription) {  // VERIFICA SI EXISTE UNA SUSCRIPCIÓN ACTIVA
      this.subscription.unsubscribe();  // CANCELA LA SUSCRIPCIÓN AL DESTRUIR COMPONENTE
    }
  }

}
