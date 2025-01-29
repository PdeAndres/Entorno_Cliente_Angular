import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css',
})
export class ListadoPersonasComponent {
  @Input()
  persona: any;

  @Output()
  selected = new EventEmitter<Persona>();

  esMenor(): boolean {
    return this.persona.edad >= 30;
  }

  personaMarcada() {
    this.selected.emit(this.persona);
  }
}
