import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'libros',
    component: LibrosComponent,
  },
  {
    path: 'libros/:id',
    component: LibroDetalleComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'libro-nuevo',
    component: LibroNuevoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
