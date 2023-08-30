import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
 match: any= {};
 addMatchForm: FormGroup;
 
  constructor(private mService:MatchService, private router:Router) { }

  ngOnInit() {
  }
  addMatch(){
    this.mService.addMatch(this.match).subscribe((data)=>
    {
      this.router.navigate(["admin"]);
    });
  }

}
