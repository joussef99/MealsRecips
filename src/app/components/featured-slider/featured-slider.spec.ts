import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSlider } from './featured-slider';

describe('FeaturedSlider', () => {
  let component: FeaturedSlider;
  let fixture: ComponentFixture<FeaturedSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
