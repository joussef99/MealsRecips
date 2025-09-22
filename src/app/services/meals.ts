import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getAllMeals(): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?i=`);
  }

  getMealById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }

  getAllCategories(): Observable<any> {
  return this.http.get(`${this.baseUrl}/categories.php`);
}

  getRandomMeal(): Observable<any> {
  return this.http.get(`${this.baseUrl}/random.php`);
}

getTopRatedMeals(): Observable<any> {
  return this.http.get(`${this.baseUrl}/search.php?s=`);
}

getMealsByLetter(letter: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/search.php?f=${letter}`);
}

getMealsByArea(area: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/filter.php?a=${area}`);
}
getMealsByIngredient(ingredient: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/filter.php?i=${ingredient}`);
}

getAllIngredients(): Observable<any> {
  return this.http.get(`${this.baseUrl}/list.php?i=list`);
}

getAllAreas(): Observable<any> {
  return this.http.get(`${this.baseUrl}/list.php?a=list`);
}

} 
