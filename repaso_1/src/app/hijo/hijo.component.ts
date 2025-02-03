import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  titulo: string = 'Componente Hijo';

  @Input()
  nombre: string = '';

  @Input()
  nota: number = 0;

  nuevoNombre: string = '';
  nuevaNota: number = 0;

  @Output()
  selected = new EventEmitter<any>();

  cambiarNombre() {
    this.nombre = this.nuevoNombre;
    this.selected.emit(this.nombre);
  }

  cambiarNota() {
    this.nota = this.nuevaNota;
    this.selected.emit(this.nota);
  }
}
