import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-scrollup',
  imports: [CommonModule],
  templateUrl: './scrollup.html',
  styleUrl: './scrollup.css'
})
export class Scrollup {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
