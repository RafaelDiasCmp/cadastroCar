import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  car: Car = {
    id: 1,
    name: "Fiat",
    automaker: "Honda",
    price: 500000,
    year: 2020,
  };
}
