import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet, PlanetList } from '../model/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  constructor(private http: HttpClient) {}

  getPlanetList(pagina: string = '1'): Observable<PlanetList> {
    return this.http.get<PlanetList>(
      `https://swapi.dev/api/planets/?page=${pagina}`
    );
  }

  getPlanet(planeta: string = '1'): Observable<Planet> {
    return this.http.get<Planet>(`https://swapi.dev/api/planets/${planeta}`);
  }
}
