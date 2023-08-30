import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { stadiums, teams } from 'src/app/data folder/data';

@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {

  searchForm:FormGroup;
  stadiumsTab: any = stadiums;
  teamsTab: any = teams;
name: string=""
owner: string=""
msg:string="";
    constructor(private formBuilder:FormBuilder, private route:Router) { }
  
    ngOnInit() {
     this.searchForm = this.formBuilder.group({
        firstName: ["",[Validators.required, Validators.minLength(3)]],
        
  
      })
    }
    search(){
    let id: any;
     for (let i = 0; i < this.stadiumsTab.length; i++) {
if(this.stadiumsTab[i].name==this.searchForm.value.firstName) {
  id=this.stadiumsTab[i].id;
  break;
}



     }
   if (id) {
    this.msg="";

    for (let j = 0; j < this.teamsTab.length; j++) {
      if(this.teamsTab[j].stadiumId==id) {
        this.name=this.teamsTab[j].name;
        this.owner=this.teamsTab[j].owner;
        break;
      }  }
   } else {
    this.msg="team not found";
    
   }
     }
    }
  


