import { Component } from '@angular/core';
import { SliderItems } from 'src/app/const/sliders.const';
import { Slider } from 'src/app/models/slider.interface';

@Component({
  selector: 'app-knowlegde-base',
  templateUrl: './knowlegde-base.component.html',
  styleUrls: ['./knowlegde-base.component.scss'],
})
export class KnowlegdeBaseComponent {
  sliders: Slider[] = SliderItems;

  constructor() {}
}
