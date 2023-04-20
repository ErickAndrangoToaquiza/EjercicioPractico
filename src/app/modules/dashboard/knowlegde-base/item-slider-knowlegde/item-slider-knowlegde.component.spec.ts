import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSliderKnowlegdeComponent } from './item-slider-knowlegde.component';

describe('ItemSliderKnowlegdeComponent', () => {
  let component: ItemSliderKnowlegdeComponent;
  let fixture: ComponentFixture<ItemSliderKnowlegdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSliderKnowlegdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSliderKnowlegdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
