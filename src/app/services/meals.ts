import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mealService {
  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getAllMeals(): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?i=`);
  }

  getMealById(id: string): Observable<any> {
    
    
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }
  
}
