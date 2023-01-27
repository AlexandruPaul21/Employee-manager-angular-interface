import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Team } from "../model/Team";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  private teamsUrl : string;

  constructor(private http : HttpClient) {
    this.teamsUrl = "http://localhost:8080/teams"
  }

  public findAll() : Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  public save(team : Team) {
    return this.http.post<Team>(this.teamsUrl, team);
  }
}