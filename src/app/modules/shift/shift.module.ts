import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';
import { ShiftComponent } from './shift.component';

const routes: Routes = [{ path: '', component: ShiftComponent }];

@NgModule({
  declarations: [ShiftComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IconComponent],
})
export class ShiftModule {}
