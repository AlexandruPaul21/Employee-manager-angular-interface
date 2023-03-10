import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private readonly urlEmp : string;

  constructor(private http : HttpClient) {
    this.urlEmp = "http://localhost:8080/employees";
  }

  public findAll() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlEmp);
  }

  public save(employee : Employee) {
    return this.http.post<Employee>(this.urlEmp, employee);
  }

  public update(employee : Employee) {
    return this.http.put<Employee>(this.urlEmp, employee);
  }

  public findById(id : string) {
    return this.http.get<Employee>(this.urlEmp + "/" + id);
  }

  public delete(id : string) {
    return this.http.delete<Employee>(this.urlEmp + "/" + id);
  }
}
