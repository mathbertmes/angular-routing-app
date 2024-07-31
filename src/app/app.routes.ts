import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: 'admin-component', component: AdminComponent},
  {path: 'home-component', component: HomeComponent}
];
