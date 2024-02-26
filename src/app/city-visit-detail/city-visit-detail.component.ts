import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../cities';

@Component({
  selector: 'app-city-visit-detail',
  standalone: true,
  imports: [],
  templateUrl: './city-visit-detail.component.html',
  styleUrl: './city-visit-detail.component.scss'
})
export class CityVisitDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cityService: CityService = inject(CityService);
  cityDetail: City | undefined

  constructor() {
    const cityId = Number(this.route.snapshot.params['id']);
    this.cityDetail = this.cityService.getCityDetailById(cityId);
  }
}
