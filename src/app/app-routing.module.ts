import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './modules/shared/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'rides',
        loadChildren: () =>
          import('@modules/rides/rides.module').then((m) => m.RidesModule),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('@modules/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'shift',
        loadChildren: () =>
          import('@modules/shift/shift.module').then((m) => m.ShiftModule),
      },
      {
        path: 'moderators',
        loadChildren: () =>
          import('@modules/moderator/moderator.module').then(
            (m) => m.ModeratorModule
          ),
      },

      {
        path: 'branches',
        loadChildren: () =>
          import('@modules/branches/branches.module').then(
            (m) => m.BranchesModule
          ),
      },
      {
        path: 'car-classes',
        loadChildren: () =>
          import('@modules/car-classes/car-classes.module').then(
            (m) => m.CarClassesModule
          ),
      },

      {
        path: 'drivers',
        loadChildren: () =>
          import('@modules/drivers/drivers.module').then(
            (m) => m.DriversModule
          ),
      },

      {
        path: 'live-map',
        loadChildren: () =>
          import('@modules/live-map/live-map.module').then(
            (m) => m.LiveMapModule
          ),
      },

      {
        path: 'settings',
        loadChildren: () =>
          import('@modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
