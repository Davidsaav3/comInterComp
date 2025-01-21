import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // EL SERVICIO SE INYECTA EN LA RAÍZ DEL ÁRBOL DE INYECCIÓN
})
export class ControlEventosService {

  private eventEmitter = new Subject<string>();  // CREACIÓN DE UN SUJETO PARA EMITIR EVENTOS
  eventEmitterFunction = this.eventEmitter.asObservable();  // CONVIERTE EL SUJETO EN UN OBSERVABLE

  emitir(mensaje: string, destinatario: string): void {
    const obj = {
      mensaje: mensaje,  // EL MENSAJE A ENVIAR
      destinatario: destinatario  // EL DESTINATARIO DEL MENSAJE
    };
    this.eventEmitter.next(JSON.stringify(obj));  // EMITE EL MENSAJE EN FORMATO JSON
  }

}
