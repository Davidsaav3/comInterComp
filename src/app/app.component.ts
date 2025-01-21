import { Component } from '@angular/core';
import { PadreComponent } from './padre/padre.component';  // Importa el componente padre

@Component({
  selector: 'app-root',
  standalone: true,  // Marca como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PadreComponent]  // Importa el componente padre aquí
})
export class AppComponent {
  title = 'comInterComp';
}
