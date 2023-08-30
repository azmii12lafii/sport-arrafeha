import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stadiumsTab } from 'src/app/data folder/data';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  id: any;
  y: any;
  stadiumsTab: any = stadiumsTab;
 
   constructor(private activatedRoute: ActivatedRoute) { }
 
   ngOnInit() {
     this.id = this.activatedRoute.snapshot.paramMap.get("id");
     for (let i = 0; i < this.stadiumsTab.length; i++) {
      if(this.stadiumsTab[i].id==this.id) {
        this.y= this.stadiumsTab[i];
        break;
      }
     }
     
     
   }

}
