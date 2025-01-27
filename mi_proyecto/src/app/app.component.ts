import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    AlumnoComponent,
    FormsModule,
    DatosLibroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  numeroLibro: string = '';
  title: string = 'Clase de Angular';
  nombre: string = 'Pablo de Andrés Olano';
  edad: number = 30;
  nombreComp: string = '';

  getEdad(): number {
    return this.edad;
  }

  name: string = 'Pablo de Andres';
  imgUrl: string = './img/favicon.ico';
  naranja: string = 'naranja';
  marcado: boolean = true;
  deshabilitado: boolean = true;

  asignatura = {
    nombre: 'Entorno Cliente',
    codigo: '123456',
  };

  mostrarNombre(): string {
    this.nombreComp = 'Pablo';
    return this.nombreComp;
  }

  mensaje: string = '';
  mostrarMensaje(event: any) {
    this.mensaje += event.target.value + ',';
  }

  capturar(event: any) {
    this.name = event.target.value;
  }

  texto1: string = '';
  texto2: string = '';

  recibirNombre(nombre: string) {
    console.log(nombre);
  }

  mostrarTitulo() {
    alert();
  }
}
