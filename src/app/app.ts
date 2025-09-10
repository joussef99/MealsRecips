import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";
import { Scrollup } from "./components/scrollup/scrollup";
import { Meals } from "./components/meals/meals";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, Scrollup, Meals ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Meals-Project-Angular');
  
}
