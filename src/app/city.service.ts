import { Injectable } from '@angular/core';
import { City } from './cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  cityList: City[] = [
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

  getCityList(): City[] {
    return this.cityList;
  }

  getCityDetailById(id: number): City | undefined {
    return this.cityList.find(city => city.id === id)
  }
}
