import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../Car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  
  @Input()
  car : Car = {} as Car;

  @Output()
  saveEmitter = new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }

  update(selectedCar:Car){
    this.car = selectedCar
  }
  
  remove(removeCar:Car){
    this.car = removeCar;
  }

}
