import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {HomeComponent} from "./home/home.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {UserComponent} from "./user/user.component";
import {AddBtnComponent} from "./add-btn/add-btn.component";

const routes: Routes = [
  {path: "", component: LayoutSinHeaderComponent,
    children:[
      {path: "", component: LoginComponent},
      {path:"home", component: HomeComponent},
      {path:"calendar", component: CalendarComponent},
      {path:"schedule", component: ScheduleComponent},
      {path:"user", component: UserComponent},
      {path:"add", component: AddBtnComponent}
    ]
  },
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
