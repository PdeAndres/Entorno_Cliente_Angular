import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'repaso_1';
  nombre: string = '';
  nota: number = 0;

  cambiarNombre() {}

  cambiarNota() {}
}
