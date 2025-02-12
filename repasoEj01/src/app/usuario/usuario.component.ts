import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  idUsuario: number = 0;
  usuario$ = new Observable<Usuario>();

  constructor(private usuarioService: UsuarioService) {}

  buscarUsuario(): void {
    this.usuario$ = this.usuarioService.getUsuario(this.idUsuario);
  }
}
