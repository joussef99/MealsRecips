import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favourits } from './favourits';

describe('Favourits', () => {
  let component: Favourits;
  let fixture: ComponentFixture<Favourits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favourits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favourits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
