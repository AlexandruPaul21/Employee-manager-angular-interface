import { Component, OnInit } from '@angular/core';
import {Team} from "../../model/Team";
import {TeamServiceService} from "../../service/team-service.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit{

  teams : Team[] | undefined;

  constructor(private teamService : TeamServiceService) {
  }

  ngOnInit() {
    this.teamService.findAll().subscribe(data => {
      this.teams = data;
    })
  }

}
