import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { teamsTab } from 'src/app/data folder/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.css']
})
export class EditTeamsComponent implements OnInit {
  id: any;
 teamsTab: any;
 team: any= {};
 editTeamForm: FormGroup;
  

  constructor(private myRouter:Router, private teamService:TeamService) { }

  ngOnInit() {
    this.id =  JSON.parse(localStorage.getItem("teamId"));
    this.teamService.getTeamById(this.id).subscribe((data)=>{
    this.team=data.team});
  
    
    
  }
  validate(){

    this.teamService.updateTeam(this.team).subscribe((result)=>{
      console.log("here match updated",result.message);
    });
    this.myRouter.navigate(["admin"]);
     }
 

}
