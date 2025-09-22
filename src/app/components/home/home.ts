import { Component } from '@angular/core';
import { FeaturedSlider } from "../featured-slider/featured-slider";
import { RandomSlider } from "../random-slider/random-slider";
import { TopRatedSlider } from "../top-rated-slider/top-rated-slider";
import { Hero } from "../hero/hero";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FeaturedSlider, RandomSlider, TopRatedSlider, Hero , RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
