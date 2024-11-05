import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../Car';
import { CarComponent } from "../car/car.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CarComponent, FormsModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  newCar : Car = {
    name : "Honda"
  } as Car;
  
  cars: Car[] = [
    {
      id: 1,
      name: "Fiat",
      automaker: "Honda",
      price: 500000,
      year: 2020,
    },
    {
      id: 2,
      name: "Toyota",
      automaker: "Toyota",
      price: 600000,
      year: 2021,
    },
    {
      id: 3,
      name: "T-Cross",
      automaker: "Ford",
      price: 550000,
      year: 2019,
    }
  ];
}
