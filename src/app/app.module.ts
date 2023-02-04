import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink } from "@angular/router";
import { EmployeeListComponent } from './lists/employee-list/employee-list.component';
import { TeamListComponent } from './lists/team-list/team-list.component';
import { EmployeeFormComponent } from './create-forms/employee-form/employee-form.component';
import { TeamFormComponent } from './create-forms/team-form/team-form.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeServiceService } from "./service/employee-service.service";
import { HttpClientModule } from "@angular/common/http";
import { TeamServiceService } from "./service/team-service.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTeamComponent } from './edit-forms/edit-team/edit-team.component';
import { EditEmployeeComponent } from './edit-forms/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-forms/delete-employee/delete-employee.component';
import { DeleteTeamComponent } from './delete-forms/delete-team/delete-team.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TeamListComponent,
    EmployeeFormComponent,
    TeamFormComponent,
    EditTeamComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    DeleteTeamComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [EmployeeServiceService, TeamServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
