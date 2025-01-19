import { Component } from '@angular/core';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadreComponent],
  template: `<app-padre></app-padre>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
