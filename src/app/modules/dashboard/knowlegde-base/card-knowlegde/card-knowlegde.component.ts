import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.interfase';

@Component({
  selector: 'app-card-knowlegde',
  templateUrl: './card-knowlegde.component.html',
  styleUrls: ['./card-knowlegde.component.scss'],
})
export class CardKnowlegdeComponent {
  @Input() cards: Card[] = [];
}
