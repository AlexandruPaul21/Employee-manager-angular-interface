import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  today : Date;

  constructor() {
    this.title = "Employee manager";
    this.today = new Date();
  }


}
