import { Component, OnInit } from '@angular/core';
import { mealService } from '../../services/meals';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-random-slider',
  imports: [CommonModule , RouterLink],
  templateUrl: './random-slider.html',
  styleUrl: './random-slider.css'
})
export class RandomSlider implements OnInit {
  meal: any = null;
  loading = false;

  constructor(private mealService: mealService) {}

  ngOnInit(): void {
    this.getRandomMeal();
  }

  getRandomMeal(): void {
    this.loading = true;
    this.mealService.getRandomMeal().subscribe((res: any) => {
      this.meal = res.meals[0];
      this.loading = false;
    });
  }
}