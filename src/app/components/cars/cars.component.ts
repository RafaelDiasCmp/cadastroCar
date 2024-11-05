import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car: Car[] = [
    {
    id : 1,
    name : "fiat",
    automaker : "honda",
    price : 500000,
    year : 20000,
  }  
  ];
}
