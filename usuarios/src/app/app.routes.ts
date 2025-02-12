import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'usuarios',
    component: ListaUsuariosComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
