import { Component, inject } from '@angular/core';
import { mealService } from '../../services/meals';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meals',
  imports: [RouterLink , CommonModule],
  templateUrl: './meals.html',
  styleUrl: './meals.css'
})
export class Meals {
  meals: any[] = [];
  loading = true;
  
  constructor(private _mealService: mealService) {}

  ngOnInit(): void {
    this._mealService.getAllMeals().subscribe((res: any) => {
      this.meals = res.meals;
      this.loading = false;
    });
  }

}
