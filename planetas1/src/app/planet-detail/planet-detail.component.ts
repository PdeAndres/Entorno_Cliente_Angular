import { Component } from '@angular/core';
import { Planet } from '../model/planet';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css',
})
export class PlanetDetailComponent {
  planet$ = new Observable<Planet>();

  constructor(private planetService: PlanetasService) {}

  ngOnInit(): void {
    this.planet$ = this.planetService.getPlanet('2');
  }
}
