import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { BuscadorComponent } from './buscador/buscador.component';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'buscador',
    component:BuscadorComponent
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  }
];
