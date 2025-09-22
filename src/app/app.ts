import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Scrollup } from "./components/scrollup/scrollup";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Scrollup ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Meals-Project-Angular');
  
}
