import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDriversComponent } from './top-drivers.component';

describe('TopDriversComponent', () => {
  let component: TopDriversComponent;
  let fixture: ComponentFixture<TopDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
