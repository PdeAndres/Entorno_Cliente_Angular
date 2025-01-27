import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo: string = 'Alta de usuario';
  nombre: string = '';
  apellidos: string = '';
  enviado: boolean = false;
  morado: string = 'morado';

  listaPersonas: Persona[] = [
    {
      nombre: 'Pablo',
      apellidos: 'de Andrés',
      edad: 30,
    },
    {
      nombre: 'Manuela',
      apellidos: 'Gonzalez',
      edad: 26,
    },
  ];
  registrar() {
    this.enviado = true;
  }
}
