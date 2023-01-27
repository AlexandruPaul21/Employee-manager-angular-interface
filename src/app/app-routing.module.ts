import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./lists/employee-list/employee-list.component";
import { EmployeeFormComponent} from "./forms/employee-form/employee-form.component";

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmployee', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
