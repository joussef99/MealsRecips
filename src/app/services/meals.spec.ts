import { TestBed } from '@angular/core/testing';
import { mealService } from './meals';

describe('Meals', () => {
  let service: mealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
