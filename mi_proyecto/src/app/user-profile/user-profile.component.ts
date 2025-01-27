import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input()
  nombre: string = 'Tom Hanks';
  @Input()
  role: string = 'Usuario';

  @Output()
  selected = new EventEmitter<string>();

  titulo: string = 'Componente User';

  seleccionar(event: any) {
    this.selected.emit(this.nombre);
  }
}
