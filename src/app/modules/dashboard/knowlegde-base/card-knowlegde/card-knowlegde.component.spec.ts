import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKnowlegdeComponent } from './card-knowlegde.component';

describe('CardKnowlegdeComponent', () => {
  let component: CardKnowlegdeComponent;
  let fixture: ComponentFixture<CardKnowlegdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKnowlegdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKnowlegdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
