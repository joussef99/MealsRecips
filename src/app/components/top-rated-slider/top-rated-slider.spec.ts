import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedSlider } from './top-rated-slider';

describe('TopRatedSlider', () => {
  let component: TopRatedSlider;
  let fixture: ComponentFixture<TopRatedSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatedSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
