import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/Libro.model';
import { LibroServiceService } from '../services/libro-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-libro-detalle',
  imports: [RouterLink],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css',
})
export class LibroDetalleComponent implements OnInit {
  libro: Libro = {
    id: '',
    titulo: '',
    autor: '',
    descripcion: '',
  };

  constructor(
    private librosService: LibroServiceService,
    private act: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.act.snapshot.params['id'];
    this.libro = this.librosService.getLibroById(id);
  }
}
