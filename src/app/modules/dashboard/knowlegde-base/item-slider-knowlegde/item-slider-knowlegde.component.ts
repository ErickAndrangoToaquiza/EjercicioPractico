import { Component, Input } from '@angular/core';
import { Slider } from 'src/app/models/slider.interface';

@Component({
  selector: 'app-item-slider-knowlegde',
  templateUrl: './item-slider-knowlegde.component.html',
  styleUrls: ['./item-slider-knowlegde.component.scss']
})
export class ItemSliderKnowlegdeComponent {
  @Input() sliders: Slider[] = [];

}
