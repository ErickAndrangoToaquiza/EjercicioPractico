import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';

const routes: Routes = [{ path: '', component: ClientsComponent }];

@NgModule({
  declarations: [ClientsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IconComponent],
})
export class ClientsModule {}
