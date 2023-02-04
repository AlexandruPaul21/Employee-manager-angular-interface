import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./lists/employee-list/employee-list.component";
import { EmployeeFormComponent} from "./create-forms/employee-form/employee-form.component";
import {TeamListComponent} from "./lists/team-list/team-list.component";
import {TeamFormComponent} from "./create-forms/team-form/team-form.component";
import {EditTeamComponent} from "./edit-forms/edit-team/edit-team.component";
import {EditEmployeeComponent} from "./edit-forms/edit-employee/edit-employee.component";
import {DeleteEmployeeComponent} from "./delete-forms/delete-employee/delete-employee.component";
import {DeleteTeamComponent} from "./delete-forms/delete-team/delete-team.component";

const routes: Routes = [
  { path: 'addEmployee', component: EmployeeFormComponent },
  { path: 'addTeam', component: TeamFormComponent},

  { path: 'employees', component: EmployeeListComponent },
  { path: 'teams', component: TeamListComponent },

  { path: 'editEmployee/:id', component: EditEmployeeComponent},
  { path: 'editTeam/:id', component: EditTeamComponent},

  { path: 'deleteEmployee/:id', component: DeleteEmployeeComponent},
  { path: 'deleteTeam/:id', component: DeleteTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
