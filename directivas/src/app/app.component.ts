import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { Persona } from './model/persona';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ArticuloComponent,
    ListadoPersonasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo: string = 'Alta de usuario';
  nombre: string = '';
  apellidos: string = '';
  enviado: boolean = false;
  buttonClick: boolean = false;
  botonClickado: string = '';
  morado: string = 'morado';
  botonA: string = 'A';
  botonB: string = 'B';
  botonC: string = 'C';

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

  buttonClicked(boton: string) {
    console.log(boton);
    this.botonClickado = `Ha pulsado el botón ${boton} `;
    this.buttonClick = true;
  }
  nombreMarcado: string = '';
  marcado: boolean = false;

  personaMarcada(persona: Persona) {
    console.log(persona.nombre);
    this.nombreMarcado = persona.nombre;
    this.marcado = true;
  }
}
