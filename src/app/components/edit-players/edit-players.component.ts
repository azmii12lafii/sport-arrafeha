import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { playersTab } from 'src/app/data folder/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {

  id: any;
  playersTab: any;
  player: any= {};
  editPlayerForm: FormGroup;
   
 
   constructor(private myRouter:Router, private playerService:PlayerService) { }
 
   ngOnInit() {
     this.id =  JSON.parse(localStorage.getItem("playerId"));
     this.playerService.getPlayerById(this.id).subscribe((data)=>{
     this.player=data.player});
   
     
     
   }
   validate(){
 
     this.playerService.updatePlayer(this.player).subscribe((result)=>{
       console.log("here match updated",result.message);
     });
     this.myRouter.navigate(["admin"]);
    }


}
