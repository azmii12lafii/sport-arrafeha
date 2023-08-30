import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id: any;
  y: any;
  teamsTab: any;
 
   constructor(private activatedRoute: ActivatedRoute, private teamService:TeamService) { }
 
   ngOnInit() {
     this.id = this.activatedRoute.snapshot.paramMap.get("id");
     this.teamService.getTeamById(this.id).subscribe((data)=>{
       console.log("here object from backend", data);
       this.y=data.team;
     });
}}
