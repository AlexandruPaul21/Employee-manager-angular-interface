import { Component, OnInit } from '@angular/core';
import { Employee } from "../../model/Employee";
import { EmployeeServiceService } from "../../service/employee-service.service";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees : Employee[] | undefined;
  faEdit = faPenSquare;

  constructor(private employeeService : EmployeeServiceService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    })
  }

}
