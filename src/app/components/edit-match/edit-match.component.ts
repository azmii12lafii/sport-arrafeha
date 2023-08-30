import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { T } from 'src/app/data folder/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  id: any;
 matchesTab: any;
 match: any= {};
 editForm: FormGroup;
  

  constructor(private myRouter:Router, private matchService:MatchService) { }

  ngOnInit() {
    this.id =  JSON.parse(localStorage.getItem("matchId"));
    this.matchService.getMatchById(this.id).subscribe((data)=>{
    this.match=data.match});
  
    
    
  }
  validate(){

    this.matchService.updateMatch(this.match).subscribe((result)=>{
      console.log("here match updated",result.message);
    });
    this.myRouter.navigate(["admin"]);
    // this.id =  JSON.parse(localStorage.getItem("matchId"));

    // for (let i = 0; i < this.matchesTab.length; i++) {
    //  if(this.matchesTab[i].id==this.id) {
    //   this.matchesTab[i]=this.match;

    //   break;
    //  }
    // }
    // this.myRouter.navigate(["admin"]);

    
  }


}
