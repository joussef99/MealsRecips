import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrollup } from './scrollup';

describe('Scrollup', () => {
  let component: Scrollup;
  let fixture: ComponentFixture<Scrollup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scrollup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scrollup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
