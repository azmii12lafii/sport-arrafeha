import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: any={};
 addTeamForm: FormGroup;
 
 
  constructor(private teamService:TeamService, private router:Router) { }

  ngOnInit() {
  }
  addTeam(){
    this.teamService.addTeam(this.team).subscribe((data)=>
    {
      console.log(this.team);
      this.router.navigate(["admin"]);
    });
  }

}

