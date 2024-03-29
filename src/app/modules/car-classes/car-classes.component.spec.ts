import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarClassesComponent } from './car-classes.component';

describe('CarClassesComponent', () => {
  let component: CarClassesComponent;
  let fixture: ComponentFixture<CarClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
