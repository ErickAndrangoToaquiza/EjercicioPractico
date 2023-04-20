import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidesComponent } from './rides.component';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: RidesComponent }];

@NgModule({
  declarations: [RidesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IconComponent, HttpClientModule],
})
export class RidesModule {}
