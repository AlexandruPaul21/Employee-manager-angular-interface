import { Component } from '@angular/core';
import { TeamServiceService } from "../../service/team-service.service";
import {Team} from "../../model/Team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent{
  team : Team;

  constructor(
    private teamService : TeamServiceService,
    private router : Router
  ) {
    this.team = new Team();
  }

  async onSubmit() {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    console.log(this.team);
    this.teamService.save(this.team).subscribe();
    await sleep(2000);
    return this.router.navigateByUrl("/teams");
  }
}
