import { Component } from '@angular/core';
import { TeamServiceService } from "../../service/team-service.service";
import {Team} from "../../model/Team";

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent {
  team : Team;

  constructor(
    private teamService : TeamServiceService
  ) {
    this.team = new Team();
  }

  onSubmit() {
    console.log(this.team);
    this.teamService.save(this.team).subscribe();
  }
}
