import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';

export interface Articulo {
  nombre: string;
  precio: number;
  unidades: number;
}
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

  articulo: Articulo = {
    nombre: '',
    precio: 0,
    unidades: 0,
  };
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
    this.articulo.nombre = this.nombre;
    this.articulo.precio = this.precio;
    this.articulo.unidades = this.unidades;
    this.listaArticulos.push(this.articulo);
  }
}
