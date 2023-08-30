import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {
  @Input() X : any ;

  constructor() { }

  ngOnInit() {
  }

}
