import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa los componentes standalone
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,  // Importa el componente standalone aquí
    PadreComponent, // Importa el componente padre
    Hijo1Component, // Importa el componente hijo1
    Hijo2Component, // Importa el componente hijo2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
