import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
  @Input() X : any ;

  constructor() { }

  ngOnInit() {
  }

}
