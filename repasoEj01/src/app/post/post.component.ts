import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { UsuarioService } from '../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  titulo: string = 'POST';

  postList$ = new Observable<Post[]>();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.postList$ = this.usuarioService.getPosts();
  }
}
