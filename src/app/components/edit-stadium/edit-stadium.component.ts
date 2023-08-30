import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {
  id: any;
  stadiumsTab: any;
  stadium: any= {};
  editStadiumForm: FormGroup;
   
 
   constructor(private myRouter:Router, private stadiumService:StadiumService) { }
 
   ngOnInit() {
     this.id =  JSON.parse(localStorage.getItem("stadiumId"));
     this.stadiumService.getStadiumById(this.id).subscribe((data)=>{
     this.stadium=data.stadium});
   
     
     
   }
   validate(){
 
     this.stadiumService.updateStadium(this.stadium).subscribe((result)=>{
       console.log("here stadium updated",result.message);
     });
     this.myRouter.navigate(["admin"]);
      }
  
 
 }
 