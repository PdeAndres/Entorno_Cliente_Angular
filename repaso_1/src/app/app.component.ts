import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HijoComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'repaso_1 PADRE';
  nombre: string = 'Pablo de Andrés Olano';
  nuevoNombre: string = '';
  nota: number = 10;
  nuevaNota: number = 0;

  cambiarNombre() {
    this.nombre = this.nuevoNombre;
  }

  cambiarNota() {
    this.nota = this.nuevaNota;
  }

  actualizarCampos(datos: any) {
    isNaN(datos) ? (this.nombre = datos) : (this.nota = datos);
  }
}
