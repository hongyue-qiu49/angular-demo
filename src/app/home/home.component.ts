import { Component, inject } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { City } from '../cities';
import { CommonModule } from '@angular/common';
import { CityService } from '../city.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    CitiesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cities: City[] = []
  cityService: CityService = inject(CityService);

  constructor() {
    this.cities = this.cityService.getCityList()
  }
}
