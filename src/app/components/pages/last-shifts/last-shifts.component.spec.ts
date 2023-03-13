import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShiftsComponent } from './last-shifts.component';

describe('LastShiftsComponent', () => {
  let component: LastShiftsComponent;
  let fixture: ComponentFixture<LastShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastShiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
