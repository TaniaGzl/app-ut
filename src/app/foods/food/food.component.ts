import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TitleCasePipe } from '@angular/common';
import { Food } from '../shared/food.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
 @Input() food?: Food;
constructor (){

}

}
