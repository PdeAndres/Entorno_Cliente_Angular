import { Component, Input } from '@angular/core';
import { Articulo } from '../articulo/articulo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'listado-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  @Input()
  listaArticulos: Articulo[] = [];
}
