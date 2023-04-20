import { Component } from '@angular/core';
import { CardItems } from 'src/app/const/cards.const';
import { SliderItems } from 'src/app/const/sliders.const';
import { Card } from 'src/app/models/card.interfase';
import { Slider } from 'src/app/models/slider.interface';

@Component({
  selector: 'app-knowlegde-base',
  templateUrl: './knowlegde-base.component.html',
  styleUrls: ['./knowlegde-base.component.scss']
})
export class KnowlegdeBaseComponent {
  sliders: Slider[] = SliderItems;
  cards:Card[]=CardItems;
}
