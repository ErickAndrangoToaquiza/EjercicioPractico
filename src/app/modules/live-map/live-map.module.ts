import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMapComponent } from './live-map.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LiveMapComponent }];

@NgModule({
  declarations: [LiveMapComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LiveMapModule {}
