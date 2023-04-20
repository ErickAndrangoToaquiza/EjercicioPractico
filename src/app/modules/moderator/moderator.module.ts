import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorComponent } from './moderator.component';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';

const routes: Routes = [{ path: '', component: ModeratorComponent }];

@NgModule({
  declarations: [ModeratorComponent],
  imports: [CommonModule, IconComponent, RouterModule.forChild(routes)],
})
export class ModeratorModule {}
