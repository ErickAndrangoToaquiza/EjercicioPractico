import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesComponent } from './branches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BranchesComponent }];


@NgModule({
  declarations: [
    BranchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BranchesModule { }
