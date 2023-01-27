import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink } from "@angular/router";
import { EmployeeListComponent } from './lists/employee-list/employee-list.component';
import { TeamListComponent } from './lists/team-list/team-list.component';
import { EmployeeFormComponent } from './forms/employee-form/employee-form.component';
import { TeamFormComponent } from './forms/team-form/team-form.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {EmployeeServiceService} from "./service/employee-service.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TeamListComponent,
    EmployeeFormComponent,
    TeamFormComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
