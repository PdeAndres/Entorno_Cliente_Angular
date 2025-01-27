import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent {
  nombre: string = 'Pablo';
  apellido: string = ' de Andres Olano';
  edad: number = 30;
  deshabilitado: boolean = true;
  isChecked: boolean = false;

  multiplicarEdad(): number {
    return this.edad * 5;
  }

  mayorEdad(): boolean {
    if (this.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }

  componenteMarcado() {
    if (!this.isChecked) {
      alert('check pulsado');
      this.isChecked = !this.isChecked;
    }
  }

  mostrarMensaje(event: any): string {
    if (event.target.value == 'H') {
      return 'Pulsado hombre';
    } else {
      return 'Pulsado mujer';
    }
  }
}
