import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroServiceService {
  listaLibros: Libro[] = [
    {
      id: '1',
      titulo: 'Esdla La comunidad del anillo',
      autor: 'Tolkien',
      descripcion: 'Muy bueno',
    },
    {
      id: '2',
      titulo: 'Esdla Las dos torres',
      autor: 'Tolkien',
      descripcion: 'Muy bueno',
    },
    {
      id: '3',
      titulo: 'Esdla El retorno del rey',
      autor: 'Tolkien',
      descripcion: 'Muy bueno',
    },
    {
      id: '4',
      titulo: 'El hobbit Un viaje inesperado',
      autor: 'Tolkien',
      descripcion: 'Muy bueno',
    },
  ];

  constructor() {}

  getListaLibros(): Libro[] {
    return this.listaLibros;
  }

  getLibroById(id: string): Libro {
    return this.listaLibros.find((libro) => libro.id === id) as Libro;
  }
}
