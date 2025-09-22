import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mealService } from '../../services/meals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-details',
  imports: [CommonModule],
  templateUrl: './meal-details.html',
  styleUrl: './meal-details.css'
})
export class MealDetails implements OnInit {
  meal: any = null;

  constructor(private route: ActivatedRoute, private mealService: mealService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealService.getMealById(id).subscribe((res: any) => {
        this.meal = res.meals[0];
      });
    }
  }

  addToFavorites(): void {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(this.meal);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert(`${this.meal.strMeal} added to favorites!`);
}


}