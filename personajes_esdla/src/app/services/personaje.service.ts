import { Injectable } from '@angular/core';
import { Personaje } from '../model/Personaje';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  listaPersonajes: Personaje[] = [
    {
      id: 1,
      nombre: 'Aragorn',
      raza: 'Humano',
    },
    {
      id: 2,
      nombre: 'Legolas',
      raza: 'Elfo',
    },
    {
      id: 3,
      nombre: 'Gimli',
      raza: 'Enano',
    },
  ];

  constructor(private http: HttpClient) {}

  getListaPersonajes(): Observable<Personaje[]> {
    return of(this.listaPersonajes);
  }

  borrarPersonaje(id: number) {
    this.listaPersonajes = this.listaPersonajes.filter(
      (personaje) => personaje.id != id
    );
  }

  agregarPersonaje(personaje: Personaje) {
    this.listaPersonajes.push(personaje);
  }
}
