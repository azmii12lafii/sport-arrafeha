import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stadiumsTab } from 'src/app/data folder/data';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {

  stadiumsTab: any ;
  constructor(private router:Router, private stadiumService:StadiumService) { }

  ngOnInit() {
    this.reloadData();
  }
  displayStadium(id:number){
  this.router.navigate([`stadiumInfo/${id}`]);
}
updateStadium(id:number){
localStorage.setItem("stadiumId",JSON.stringify(id));
this.router.navigate(["editStadium"]);

}
deleteStadium(id:number){
  this.stadiumService.deleteStadium(id).subscribe((response)=>{
    this.reloadData(); 
   });

}
reloadData(){
  this.stadiumService.getAllStadium().subscribe(
    (response)=>{
      this.stadiumsTab=response.stadiums;
    });
}
}
