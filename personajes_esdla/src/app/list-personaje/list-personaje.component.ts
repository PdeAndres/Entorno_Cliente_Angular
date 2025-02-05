import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../model/Personaje';
import { PersonajeService } from '../services/personaje.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css',
})
export class ListPersonajeComponent implements OnInit {
  listaPersonajes$ = new Observable<Personaje[]>();

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.listaPersonajes$ = this.personajeService.getListaPersonajes();
  }

  borrarPersonaje(id: number) {
    console.log('Click componente');
    this.personajeService.borrarPersonaje(id);
    this.listaPersonajes$ = this.personajeService.getListaPersonajes();
  }
}
