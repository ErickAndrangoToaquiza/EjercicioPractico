import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DriversComponent }];


@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DriversModule { }
