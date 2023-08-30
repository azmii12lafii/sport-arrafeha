import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() X: any;
  actualDate: Date = new Date();
  y: any = "Dashbord";
  constructor() { }

  ngOnInit() {
  }

}
