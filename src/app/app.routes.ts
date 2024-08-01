import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/home/child-a/child-a.component';
import { ChildBComponent } from './components/home/child-b/child-b.component';

export const routes: Routes = [
  {path: 'admin-component', component: AdminComponent},
  {path: 'home-component', component: HomeComponent, children : [
    {
      // child route path
      path: 'child-a',
      // child route component that the router renders
      component: ChildAComponent,
  },
  {
      path: 'child-b',
      // another child route component that the router renders
      component: ChildBComponent,
  },
  ]},
  {path : '', redirectTo : "/home-component", pathMatch : "full"},
  {path: "**", component: PageNotFoundComponent}
];