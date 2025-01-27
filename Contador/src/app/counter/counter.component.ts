import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  contador: number = 10;

  sumar() {
    this.contador++;
  }

  restar() {
    this.contador--;
  }

  reset() {
    this.contador = 10;
  }
}
