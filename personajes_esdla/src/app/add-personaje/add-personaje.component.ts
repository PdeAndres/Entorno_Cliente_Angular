import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../model/Personaje';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent {
  nuevoPersonaje: Personaje = {
    id: 0,
    nombre: '',
    raza: '',
  };

  constructor(private personajeService: PersonajeService) {}

  agregarPersonaje() {
    console.log('click');
    if (this.nuevoPersonaje.nombre && this.nuevoPersonaje.raza) {
      this.personajeService.agregarPersonaje(this.nuevoPersonaje);
      this.nuevoPersonaje = {
        id: 0,
        nombre: '',
        raza: '',
      };
    }
  }
}
