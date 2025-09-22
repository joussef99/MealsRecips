import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mealService } from '../../services/meals';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-meals',
  imports: [ CommonModule , RouterLink],
  templateUrl: './category-meals.html',
  styleUrl: './category-meals.css'
})
export class CategoryMeals implements OnInit {
  categoryName = '';
  meals: any[] = [];

  constructor(private route: ActivatedRoute, private mealService: mealService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['name'];
      this.mealService.getMealsByCategory(this.categoryName).subscribe((res: any) => {
        this.meals = res.meals;
      });
    });
  }
}