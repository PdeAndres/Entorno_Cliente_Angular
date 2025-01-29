import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NombreServicioService {
  constructor(private http: HttpClient) {}
}
