import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { IconComponent } from './modules/shared/icon/icon.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { TopDriversComponent } from './components/pages/top-drivers/top-drivers.component';
import { LastShiftsComponent } from './components/pages/last-shifts/last-shifts.component';
import { KnowlegdeBaseComponent } from './components/pages/knowlegde-base/knowlegde-base/knowlegde-base.component';
import { CardKnowlegdeComponent } from './components/pages/knowlegde-base/card-knowlegde/card-knowlegde.component';
import { ItemSliderKnowlegdeComponent } from './components/pages/knowlegde-base/item-slider-knowlegde/item-slider-knowlegde.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    KnowlegdeBaseComponent,
    TopDriversComponent,
    LastShiftsComponent,
    CardKnowlegdeComponent,
    ItemSliderKnowlegdeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SidebarComponent, IconComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
