import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlEventosService {

  private eventEmitter = new Subject<string>();
  eventEmitterFunction = this.eventEmitter.asObservable();

  emitir(mensaje: string, destinatario: string): void {
    const obj = {
      mensaje: mensaje,
      destinatario: destinatario
    };
    this.eventEmitter.next(JSON.stringify(obj));
  }

}
