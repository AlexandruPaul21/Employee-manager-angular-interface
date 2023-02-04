import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Team } from "../model/Team";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  private readonly teamsUrl : string;

  constructor(private http : HttpClient) {
    this.teamsUrl = "http://localhost:8080/teams"
  }

  public findAll() : Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  public findById(id : string) {
    return this.http.get<Team>(this.teamsUrl + "/" + id);
  }

  public save(team : Team) {
    return this.http.post<Team>(this.teamsUrl, team);
  }

  public update(team : Team) {
    return this.http.put<Team>(this.teamsUrl, team);
  }

  public delete(id : string) {
    return this.http.delete<Team>(this.teamsUrl + "/" + id);
  }
}
