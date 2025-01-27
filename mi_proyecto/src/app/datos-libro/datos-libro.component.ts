import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'datos-libro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css',
})
export class DatosLibroComponent {
  titulo: string = 'COMPONENTE LIBRO';

  libro = {
    titulo: 'El señor de los anillos',
    autor: 'autor',
    precio: 20,
    stock: 5,
    cantidad: 3,
    imagen:
      'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg',
  };

  libro2 = {
    titulo: 'segundo libro',
    autor: 'autor',
    precio: 20,
    stock: 5,
    cantidad: 3,
    imagen:
      'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg',
  };

  libro3 = {
    titulo: 'tercer libro',
    autor: 'autor',
    precio: 20,
    stock: 5,
    cantidad: 3,
    imagen:
      'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg',
  };

  arrayLibros: any[] = [this.libro, this.libro2, this.libro3];

  @Input()
  numeroLibro: string = '';

  @Output()
  selected = new EventEmitter<string>();

  actualizarCantidad(event: any) {
    if (event.target.id == 'sumar') {
      this.libro.cantidad++;
    } else {
      this.libro.cantidad--;
    }
  }

  recibirTitulo() {
    this.selected.emit(this.arrayLibros[parseInt(this.numeroLibro)].titulo);
  }
}
