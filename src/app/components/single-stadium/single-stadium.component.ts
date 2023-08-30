import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-stadium',
  templateUrl: './single-stadium.component.html',
  styleUrls: ['./single-stadium.component.css']
})
export class SingleStadiumComponent implements OnInit {
  @Input() X : any ;

  constructor() { }

  ngOnInit() {
  }

}
