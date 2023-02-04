import { Component } from '@angular/core';
import {Team} from "../../model/Team";
import {TeamServiceService} from "../../service/team-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent {
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
      console.log("Error not found")
    }
  }

  async onSubmit() {
    if (this.id == null) {
      console.log("Error");
      return;
    }
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    this.teamService.delete(this.id).subscribe();
    await sleep(100);
    return this.router.navigateByUrl("/teams");
  }
}
