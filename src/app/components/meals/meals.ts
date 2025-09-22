import { Component, OnInit } from '@angular/core';
import { mealService } from '../../services/meals';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule , ReactiveFormsModule } from '@angular/forms';
import { forkJoin, Observable , debounceTime, of, tap } from 'rxjs';


@Component({
  selector: 'app-meals',
  imports: [RouterLink , CommonModule , FormsModule , FormsModule , ReactiveFormsModule],
  templateUrl: './meals.html',
  styleUrl: './meals.css'
})
export class Meals implements OnInit {
  meals: any[] = [];
  categories: any[] = [];
  areas: any[] = [];
  ingredients: any[] = [];
  selectedCategory = '';
  selectedArea = '';
  selectedIngredient = '';
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchTerm: string = '';
  searchControl = new FormControl('');
  private mealCache: { [id: string]: any } = {};


  constructor(private mealService: mealService) {}

  ngOnInit(): void {
  this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(term => {
  this.searchTerm = term !== null ? term : '';
  this.onFilterChange();
});


  // Initial load
  this.mealService.getAllMeals().subscribe((res: any) => {
    this.meals = res.meals || [];
  });

  // Load dropdown data
  this.mealService.getAllMeals().subscribe((res: any) => this.meals = res.meals ?? []);
  this.mealService.getAllCategories().subscribe((res: any) => this.categories = res.categories);
  this.mealService.getAllAreas().subscribe((res: any) => this.areas = res.meals);
  this.mealService.getAllIngredients().subscribe((res: any) => this.ingredients = res.meals);
}

  onFilterChange(): void {
  const fetchSource = this.selectedCategory
    ? this.mealService.getMealsByCategory(this.selectedCategory)
    : this.mealService.getAllMeals();

  fetchSource.subscribe((res: any) => {
    const basicMeals = res.meals || [];

const detailRequests: Observable<any>[] = basicMeals.map((meal: { idMeal: string; }) => {
  if (this.mealCache[meal.idMeal]) {
    return of({ meals: [this.mealCache[meal.idMeal]] });
  } else {
    return this.mealService.getMealById(meal.idMeal).pipe(
      tap(res => {
        if (res.meals?.[0]) {
          this.mealCache[meal.idMeal] = res.meals[0];
        }
      })
    );
  }
});


    forkJoin(detailRequests).subscribe((responses: any[]) => {
      let fullMeals = responses.map(r => r.meals[0]);

      // Filter by area
      if (this.selectedArea) {
        fullMeals = fullMeals.filter(meal => meal.strArea === this.selectedArea);
      }

      // Filter by ingredient
      if (this.selectedIngredient) {
        fullMeals = fullMeals.filter(meal => {
          for (let i = 1; i <= 20; i++) {
            const ing = meal[`strIngredient${i}`];
            if (ing && ing.toLowerCase().includes(this.selectedIngredient.toLowerCase())) {
              return true;
            }
          }
          return false;
        });
      }

      // Filter by search term
      if (this.searchTerm.trim()) {
  fullMeals = fullMeals.filter(meal =>
    meal.strMeal.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
      this.meals = fullMeals;
    });
  });
}
  searchByLetter(letter: string): void {
    this.mealService.getMealsByLetter(letter.toLowerCase()).subscribe((res: any) => {
      this.meals = res.meals || [];
      this.searchTerm = '';
      this.selectedCategory = '';
      this.selectedArea = '';
      this.selectedIngredient = '';
    });
  }

  clearFilters(): void {
  this.selectedCategory = '';
  this.selectedArea = '';
  this.selectedIngredient = '';
  this.mealService.getAllMeals().subscribe((res: any) => {
    this.meals = res.meals || [];
  });
}

}