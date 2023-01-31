import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./lists/employee-list/employee-list.component";
import { EmployeeFormComponent} from "./forms/employee-form/employee-form.component";
import {TeamListComponent} from "./lists/team-list/team-list.component";
import {TeamFormComponent} from "./forms/team-form/team-form.component";

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmployee', component: EmployeeFormComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'addTeam', component: TeamFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
