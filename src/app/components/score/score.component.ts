import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() X : any ;
  @Output() matchesOutput: EventEmitter<any>=new EventEmitter();
   myPath:string;
  constructor(private router:Router, private mService:MatchService) { }

  ngOnInit() {
   this.myPath= this.router.url;

  }
  scoreColor(scoreOne:any,scoreTwo:any){
    if(scoreOne>scoreTwo){
      return "green"
    }
    else if(scoreOne<scoreTwo){
      return "red"
    }
    else {
      return "blue"
    }
  }
  scoreForme(scoreOne: any, scoreTwo: any){
    if(scoreOne>scoreTwo){
      return true;
    }
    else{
      return false;
    }
  }
  deleteMatch(id){
    this.mService.deleteMatch(id).subscribe((data)=>{
      this.mService.getAllMatches().subscribe((response)=>{
        this.matchesOutput.emit(response.matches)
        this.router.navigate(["my-matches"]);
   })
    });
    
    
  }

}
