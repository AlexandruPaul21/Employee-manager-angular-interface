import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Employee } from "../../model/Employee";
import { EmployeeServiceService } from "../../service/employee-service.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee : Employee;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private employeeService : EmployeeServiceService
  ) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.goToEmployeeList());
  }

  goToEmployeeList() {
    this.router.navigate(['/employee'])
  }

}
