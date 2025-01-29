import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'carcteristicas-articulo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carcteristicas-articulo.component.html',
  styleUrl: './carcteristicas-articulo.component.css',
})
export class CarcteristicasArticuloComponent {
  caracteristica: string = '';
  @Output()
  selected = new EventEmitter<string>();

  nuevaCaracteristica() {
    this.selected.emit(this.caracteristica);
  }
}
