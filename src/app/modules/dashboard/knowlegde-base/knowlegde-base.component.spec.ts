import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlegdeBaseComponent } from './knowlegde-base.component';

describe('KnowlegdeBaseComponent', () => {
  let component: KnowlegdeBaseComponent;
  let fixture: ComponentFixture<KnowlegdeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowlegdeBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowlegdeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
