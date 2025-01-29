import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Articulo } from '../model/articulo';
import { CarcteristicasArticuloComponent } from '../carcteristicas-articulo/carcteristicas-articulo.component';

@Component({
  selector: 'listado-articulos',
  standalone: true,
  imports: [CommonModule, CarcteristicasArticuloComponent],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  @Input()
  listaArticulos: Articulo[] = [];

  caracteristica: string = '';

  mostrarCaracteristica(caracteristica: string) {
    this.caracteristica = caracteristica;
  }
}
