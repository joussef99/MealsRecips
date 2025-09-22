import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Favourite {

  getFavorites(): any[] {
  const stored = localStorage.getItem('favorites');
  const raw = stored ? JSON.parse(stored) : [];

  const unique = raw.filter((meal: { idMeal: any; }, index: any, self: any[]) =>
    index === self.findIndex(m => m.idMeal === meal.idMeal)
  );

  return unique;
}

addToFavorites(meal: any): void {
  const favorites = this.getFavorites();
  const exists = favorites.some(m => m.idMeal === meal.idMeal);

  if (!exists) {
    favorites.push(meal);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

removeFromFavorites(id: string): void {
  const updated = this.getFavorites().filter(m => m.idMeal !== id);
  localStorage.setItem('favorites', JSON.stringify(updated));
}
}
