import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { HomeComponent } from './home/home.component';
import { NavBarBotonComponent } from './nav-bar-boton/nav-bar-boton.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';
import { AddBtnComponent } from './add-btn/add-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutSinHeaderComponent,
    HomeComponent,
    NavBarBotonComponent,
    CalendarComponent,
    ScheduleComponent,
    UserComponent,
    AddBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
