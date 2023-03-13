import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowlegdeBaseComponent } from './components/pages/knowlegde-base/knowlegde-base/knowlegde-base.component';

const routes: Routes = [
  {
    path: 'knowlegde-base',
    component: KnowlegdeBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
