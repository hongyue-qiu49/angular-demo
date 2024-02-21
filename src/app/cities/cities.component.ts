import { Component, Input, OnInit } from '@angular/core';
import { City } from '../cities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cities',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  @Input() cities!: City[];

  forbidSortInkeyValuePipe() {
    return 0
  }

}
