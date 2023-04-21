import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { CardKnowlegdeComponent } from './knowlegde-base/card-knowlegde/card-knowlegde.component';
import { ItemSliderKnowlegdeComponent } from './knowlegde-base/item-slider-knowlegde/item-slider-knowlegde.component';
import { KnowlegdeBaseComponent } from './knowlegde-base/knowlegde-base.component';
import { LastShiftsComponent } from './last-shifts/last-shifts.component';
import { TopDriversComponent } from './top-drivers/top-drivers.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [
    DashboardComponent,
    KnowlegdeBaseComponent,
    LastShiftsComponent,
    TopDriversComponent,
    CardKnowlegdeComponent,
    ItemSliderKnowlegdeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), IconComponent],
})
export class DashboardModule {}
