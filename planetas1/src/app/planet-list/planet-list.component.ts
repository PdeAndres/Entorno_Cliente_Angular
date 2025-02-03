import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { PlanetList } from '../model/planet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent {
  planetList$ = new Observable<PlanetList>();

  constructor(private planetService: PlanetasService) {}

  ngOnInit(): void {
    this.planetList$ = this.planetService.getPlanetList();
  }
}
