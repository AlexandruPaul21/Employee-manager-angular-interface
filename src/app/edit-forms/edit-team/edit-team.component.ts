import { Component } from '@angular/core';
import { TeamServiceService } from "../../service/team-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../../model/Team";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent {
  id : string | null;
  team : Team;

  constructor(
    private teamService : TeamServiceService,
    private activeRoute : ActivatedRoute,
    public router : Router
  ) {
    this.team = new Team();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.teamService.findById(this.id).subscribe(data => {
        this.team = data;
      })
    } else {
      console.log("Error, not found")
    }
  }

  async onSubmit() {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    this.teamService.update(this.team).subscribe();
    await sleep(100);
    return this.router.navigateByUrl("/teams");
  }
}
