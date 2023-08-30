import { Component, OnInit } from '@angular/core';
import { teamsTab } from 'src/app/data folder/data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teamsTab : any = teamsTab;
  constructor() { }

  ngOnInit() {
  }

}
