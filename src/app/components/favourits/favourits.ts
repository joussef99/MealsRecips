import { Component } from '@angular/core';
import { Favourite } from '../../services/favourite';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favourits',
  imports: [ CommonModule , RouterModule],
  templateUrl: './favourits.html',
  styleUrl: './favourits.css'
})
export class Favourits {

  constructor(private Favourite: Favourite) { }
  favorites: any[] = [];

ngOnInit(): void {
  this.favorites = this.Favourite.getFavorites();
}

remove(id: string): void {
  this.Favourite.removeFromFavorites(id);
  this.favorites = this.Favourite.getFavorites();
}


}
