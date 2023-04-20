import { Component } from '@angular/core';
import { TopDriversInterface } from 'src/app/const/top-drivers.const';
import { TopDriver } from 'src/app/models/top-drivers.interface';

@Component({
  selector: 'app-top-drivers',
  templateUrl: './top-drivers.component.html',
  styleUrls: ['./top-drivers.component.scss']
})
export class TopDriversComponent {
  users: TopDriver[] = TopDriversInterface

}
