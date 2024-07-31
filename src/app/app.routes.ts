import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'admin-component', component: AdminComponent},
  {path: 'home-component', component: HomeComponent},
  {path : '', redirectTo : "/home-component", pathMatch : "full"},
  {path: "**", component: PageNotFoundComponent}
];
