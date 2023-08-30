import { Component, OnInit } from '@angular/core';
import { T } from 'src/app/data folder/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 matches :any=[] ;


  constructor(private mService:MatchService) { }

  ngOnInit() {
    this.mService.getAllMatches().subscribe((data)=>{
      this.matches=data.matches;
    })
  }
  updateMatches(T:any){
    this.matches=T;
  }

}
