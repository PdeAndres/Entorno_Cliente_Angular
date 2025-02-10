import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/Libro.model';
import { LibroServiceService } from '../services/libro-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  imports: [RouterLink, CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  titulo: string = 'Lista de libros';
  listaLibros: Libro[] = [];
  constructor(private librosService: LibroServiceService) {}

  ngOnInit(): void {
    this.listaLibros = this.librosService.getListaLibros();
  }
}
