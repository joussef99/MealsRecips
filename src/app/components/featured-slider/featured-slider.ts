import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mealService } from '../../services/meals';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-slider',
  imports: [CommonModule , RouterLink],
  templateUrl: './featured-slider.html',
  styleUrl: './featured-slider.css'
})
export class FeaturedSlider implements OnInit {
  categories: any[] = [];
  currentIndex = 0;
  autoScrollInterval: any;

  @ViewChild('slider', { static: true }) sliderRef!: ElementRef;

  constructor(private mealService: mealService) {}

  ngOnInit(): void {
    this.mealService.getAllCategories().subscribe((res: any) => {
      this.categories = res.categories;
      this.startAutoSlide();
    });
  }

  startAutoSlide(): void {
    setInterval(() => {
      if (!this.sliderRef?.nativeElement) return;

      const cardWidth = 300; 
      this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      const scrollAmount = this.currentIndex * cardWidth;

      this.sliderRef.nativeElement.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 5000);
  }

   pauseAutoSlide(): void {
    clearInterval(this.autoScrollInterval);
  }

  resumeAutoSlide(): void {
    this.startAutoSlide();
  }
}