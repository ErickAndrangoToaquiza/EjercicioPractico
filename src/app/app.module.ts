import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TopDriversComponent } from './components/pages/top-drivers/top-drivers.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { IconComponent } from './modules/shared/icon/icon.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    TopDriversComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    IconComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
