import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { T } from 'src/app/data folder/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
 id: any;
 y: any;
 matchesTab: any = T;

  constructor(private activatedRoute: ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe((data)=>{
      console.log("here object from backend", data);
      this.y=data.match;
    });
    
    
    
  }


}
