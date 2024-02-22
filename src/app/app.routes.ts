import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityVisitDetailComponent } from './city-visit-detail/city-visit-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home page'
  },
  {
    path: 'details/:id',
    component: CityVisitDetailComponent,
    title: 'city detail page'
  }
];
