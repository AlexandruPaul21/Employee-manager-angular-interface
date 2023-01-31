import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Employee } from "../../model/Employee";
import { EmployeeServiceService } from "../../service/employee-service.service";
import {TeamServiceService} from "../../service/team-service.service";
import {Team} from "../../model/Team";
import {timestamp} from "rxjs";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  employee : Employee;
  availableTeams : Team[] | undefined;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private employeeService : EmployeeServiceService,
    private teamService : TeamServiceService
  ) {
    this.employee = new Employee();
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.save(this.employee).subscribe();
  }

  onSelectedDev(fct : string): void {
    this.employee.developerFunction = fct;
  }

  onSelectedAdm(fct : string): void {
    this.employee.admFunction = fct;
  }

  onSelectedTeam(id : string): void {
    console.log(id);
    this.teamService.findById(id).subscribe(data => {
      this.employee.team = data;
    })
  }

  ngOnInit() {
    this.teamService.findAll().subscribe(data => {
      this.availableTeams = data;
    })
  }
}
