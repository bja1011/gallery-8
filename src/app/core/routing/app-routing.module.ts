import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GalleriesComponent } from '../galleries/galleries.component';
import { ABOUT_ROUTE, GALLERIES_ROUTE, HOME_ROUTE } from './constants';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path: HOME_ROUTE, component: HomeComponent
  },
  {
    path: GALLERIES_ROUTE, component: GalleriesComponent
  },
  {
    path: ABOUT_ROUTE, component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
