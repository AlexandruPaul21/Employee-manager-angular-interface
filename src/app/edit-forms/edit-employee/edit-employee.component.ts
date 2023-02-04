import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../service/employee-service.service";
import {TeamServiceService} from "../../service/team-service.service";
import {Employee} from "../../model/Employee";
import {Team} from "../../model/Team";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
  id : string | null;
  employee : Employee;
  availableTeams? : Team[];

  constructor(
    private employeeService : EmployeeServiceService,
    private teamsService : TeamServiceService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ) {

    this.employee = new Employee();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.employeeService.findById(this.id).subscribe(data => {
        this.employee = data;
      })
    } else {
      console.log("Error, not found");
    }

  }

  async onSubmit() {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    this.employeeService.update(this.employee).subscribe();
    await sleep(100);
    return this.router.navigateByUrl("/employees");
  }

  ngOnInit() {
    this.teamsService.findAll().subscribe(data => {
      this.availableTeams = data;
    })
  }
}
