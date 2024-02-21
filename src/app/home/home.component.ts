import { Component } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { City } from '../cities';
import { CommonModule } from '@angular/common';

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
  cities: City[] = [
    {
      id: 0,
      name: 'Chongqing',
      visitedBefore: true,
      visitedTime: '',
      planVisittime: '',
      area: 'Asia',
      contry: 'China',
      photo: ''
    },
    {
      id: 1,
      name: 'Chengdu',
      visitedBefore: false,
      visitedTime: '',
      planVisittime: '',
      area: 'Asia',
      contry: 'China',
      photo: ''
    }
  ]
}
