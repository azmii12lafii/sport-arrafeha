import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  searchForm:FormGroup;
  playersTab: any ;
  player:any=[];
    constructor(private formBuilder:FormBuilder, private route:Router, private playerService:PlayerService) { }
  
    ngOnInit() {
     this.searchForm = this.formBuilder.group({
        name: ["",[Validators.required,]],
        age: ["",[Validators.required,]],

        
  
      })
    }
    search(){
      this.playerService.searchPlayer(this.searchForm.value).subscribe((result)=>{
this.player=result.player;
console.log(this.player);
});

   
     }
    }
  



