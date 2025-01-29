import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';
import { Articulo } from '../model/articulo';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule, ListadoArticulosComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  nombre: string = '';
  precio: number = 0;
  unidades: number = 0;

  listaArticulos: Articulo[] = [
    {
      nombre: 'Ratón',
      precio: 10,
      unidades: 100,
    },
    {
      nombre: 'Teclado',
      precio: 20,
      unidades: 200,
    },
    {
      nombre: 'Pantalla',
      precio: 30,
      unidades: 300,
    },
  ];

  comprar() {
    let articulo: Articulo = {
      nombre: this.nombre,
      precio: this.precio,
      unidades: this.unidades,
    };

    this.listaArticulos.push(articulo);
  }
}
