import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlmacenComponent } from './almacen/almacen.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'estacionamiento', component: EstacionamientoComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'almacen', component: AlmacenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
