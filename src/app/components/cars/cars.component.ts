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
  
  car : Car = {} as Car;
  isUpdate : boolean = false;
  idCount : number = 1;
  
  cars: Car[] = [];

  saveCar(){
    
  if(!this.isUpdate){
    this.car.id = this.idCount;
    this.idCount++;
    this.car.id = this.cars.length + 1;
    this.cars.push(this.car);
    }

    this.car = {} as Car;
    this.isUpdate = false;
  }

  update(selectedCar:Car){
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(removeCar:Car){
    this.cars = this.cars.filter( b => b !== removeCar);
  }
}
