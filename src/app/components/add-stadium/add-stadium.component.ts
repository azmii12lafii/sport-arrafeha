import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stadiumsTab } from 'src/app/data folder/data';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  addStadiumForm:FormGroup;
  // currentId: number = 1; 

    constructor(private formBuilder:FormBuilder,private stadiumService:StadiumService, private router:Router) { }
  
    ngOnInit() {
     this.addStadiumForm = this.formBuilder.group({
      name: ["",[Validators.required]],
        capacity:["",[Validators.required]],
        country:[""],

  
      })
    }
    addStadium(){
      // var stadiumsTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
      // this.addStadiumForm.value.id=this.generateId(stadiumsTab)+1;
      // stadiumsTab.push(this.addStadiumForm.value);

      // localStorage.setItem("stadiums", JSON.stringify(stadiumsTab));
      this.stadiumService.addStadium(this.addStadiumForm.value).subscribe((data)=>
    {
      console.log(this.addStadiumForm.value);
      this.router.navigate(["admin"]);
    });
  }
  

    }
  //   generateId(t:any) {

  //     if (t.length == 0) {
  //         return 1;
  //     }
  //     else {
  //         var max = t[0].id;
  //         for (let i = 1; i < t.length; i++) {
  //             if (t[i].id > max) {
  //                 max = t[i].id;
  //             }
  
  //         }
  //         return max;
  //     }
  // }

   
    



