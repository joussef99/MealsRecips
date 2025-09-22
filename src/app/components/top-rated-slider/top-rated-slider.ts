import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mealService } from '../../services/meals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-rated-slider',
  imports: [CommonModule , RouterLink],
  templateUrl: './top-rated-slider.html',
  styleUrl: './top-rated-slider.css'
})
export class TopRatedSlider implements OnInit {
  meals: any[] = [];

  constructor(private mealService: mealService) {}

  ngOnInit(): void {
    this.mealService.getTopRatedMeals().subscribe((res: any) => {
      this.meals = res.meals.slice(0, 5);
    });
  }
}