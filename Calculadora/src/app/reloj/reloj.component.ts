import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj',
  imports: [FormsModule],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css',
})
export class RelojComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): number {
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }

  restar(): number {
    this.resultado = this.numero1 - this.numero2;
    return this.resultado;
  }

  multiplicar(): number {
    this.resultado = this.numero1 * this.numero2;
    return this.resultado;
  }

  dividir(): number {
    if (this.numero1 < this.numero2 || this.numero1 == 0) {
      this.resultado = 0;
    } else {
      this.resultado = this.numero1 / this.numero2;
    }

    return this.resultado;
  }
}
