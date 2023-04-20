import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../icon/icon.component';
import { SidebarRoutes } from 'src/app/const/sidebar.const';
import { RouterModule,Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterModule,  BrowserModule,],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router){
    console.log(this.router.url)
  }

  activated = this.router.url;

  menuOptions = SidebarRoutes;
}
