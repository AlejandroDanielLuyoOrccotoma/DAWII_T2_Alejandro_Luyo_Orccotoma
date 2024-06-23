import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { LlanteriaComponent } from './llanteria/llanteria.component';
import { Almacen2Component } from './almacen2/almacen2.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'llanteria', component: LlanteriaComponent },
  { path: 'almacen', component: AlmacenComponent },
  { path: 'almacen2', component: Almacen2Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
