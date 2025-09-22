import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSlider } from './random-slider';

describe('RandomSlider', () => {
  let component: RandomSlider;
  let fixture: ComponentFixture<RandomSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
